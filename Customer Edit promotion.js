//Query Depratment
 var grDept = new GlideRecord('cmn_department');
 	grDept.addQuery('active', true);
 	grDept.addQuery("u_department_type", "Hospital");
 	grDept.addNullQuery('u_new_customer');
    grDept.addEncodedQuery('company=23ca520bdbb6f6003c9a7aa9bf96193b');
	grDept.queryNoDomain();
	while (grDept.next()) {
//Query Location
    var grLoc = new GlideRecord("cmn_location");
    grLoc.addQuery("u_active", true);
    grLoc.addEncodedQuery("u_locationtypeNOT INBillTo,Physical Location,ShipTo");
    grLoc.addQuery("u_department", grDept.sys_id);
    grLoc.queryNoDomain();
    gs.print(grLoc.getRowCount());
    while (grLoc.next()) {
//Query Customer
        var grCust = new GlideRecord("customer_account");
        grCust.addQuery("state", grLoc.state);
        grCust.addQuery("city", grLoc.city);
        grCust.addQuery("street", "=", grLoc.street);
        grCust.addOrCondition("u_address_2", "=", grLoc.street);
        grCust.queryNoDomain();
        gs.print(grCust.getRowCount());
        if (grCust.next()) {

            grDept.u_customer_exists = true;
            grDept.u_new_customer = grCust.sys_id.toString();
            grDept.update();
//Insert Entity Relationship            
            var newEntity1 = new GlideRecord('account_relationship');
            newEntity1.initialize();
            newEntity1.from_company = grCust.sys_id;
            newEntity1.to_company = grLoc.u_department.company;
            newEntity1.relationship_type = '2d8ebaebdb775fc058fbfa5aaf9619e9';
            newEntity1.insert();
//Check if department exists
			var changeDept = new GlideRecord("cmn_department");
			changeDept.addQuery('active', true);
			changeDept.addQuery('company',grCust.sys_id);
			changeDept.addQuery('name', grDept.name);
			changeDept.queryNoDomain();
		    if(changeDept.next()){}
			else {
//Insert and Stay Department to new customer
            changeDept.initialize();
            changeDept.name = grDept.name;
            changeDept.company = grCust.sys_id;
            changeDept.u_department_type = grDept.u_department_type;
            changeDept.primary_contact = grDept.primary_contact;
            changeDept.u_default_pm_month = grDept.u_default_pm_month;
            changeDept.u_default_assignment_group = grDept.u_default_assignment_group;
            changeDept.u_on_call_rota = grDept.u_on_call_rota;
            changeDept.u_default_primary_tech = grDept.u_default_primary_tech;
            changeDept.u_default_secondary_tech = grDept.u_default_secondary_tech;
            changeDept.u_default_pm_tech = grDept.u_default_pm_tech;
            changeDept.u_trimedx_dept_name = grDept.u_trimedx_dept_name;
            changeDept.insert();
    		//Update Current Department associated new department
       		grDept.u_new_department = changeDept.sys_id.toString(); 
//Insert and Stay Location to new department
            var changeLoc = new GlideRecord("cmn_location");
            changeLoc.initialize();
            changeLoc.name = grLoc.name;
            changeLoc.u_locationtype = grLoc.u_locationtype;
            changeLoc.u_department = changeDept.sys_id;
            changeLoc.company = changeDept.company;
            changeLoc.account = changeDept.company;
            changeLoc.street = grLoc.street;
            changeLoc.city = grLoc.city;
            changeLoc.state = grLoc.state;
            changeLoc.zip = grLoc.zip;
            changeLoc.u_address_2 = grLoc.u_address_2;
            changeLoc.insert();
            }
            } else{
//Insert New Customer        	
            var newCust = new GlideRecord("customer_account");
            newCust.initialize();
            newCust.street = grLoc.street;
            newCust.name = grLoc.name;
            newCust.state = grLoc.state;
            newCust.city = grLoc.city;
            newCust.zip = grLoc.zip;
            newCust.active = true;
            newCust.customer = true;
            newCust.u_time_zone = grLoc.u_department.company.u_time_zone;
            newCust.account_parent = grLoc.u_department.company.account_parent;
            newCust.u_status = grLoc.u_department.company.u_status;
            newCust.u_rsqm_pm_generation = true;
            newCust.u_shop_hours = grLoc.u_department.company.u_shop_hours;
            newCust.insert();

//Insert New Department to Customer above
            var newDept = new GlideRecord("cmn_department");
            newDept.initialize();
            newDept.name = "Primary";
            newDept.company = newCust.sys_id;
            newDept.u_department_type = grDept.u_department_type;
            newDept.primary_contact = grDept.primary_contact;
            newDept.u_default_pm_month = grDept.u_default_pm_month;
            newDept.u_default_assignment_group = grDept.u_default_assignment_group;
            newDept.u_on_call_rota = grDept.u_on_call_rota;
            newDept.u_default_primary_tech = grDept.u_default_primary_tech;
            newDept.u_default_secondary_tech = grDept.u_default_secondary_tech;
            newDept.u_default_pm_tech = grDept.u_default_pm_tech;
            newDept.u_trimedx_dept_name = grDept.u_trimedx_dept_name;
            newDept.insert();
//Update Current Department associated new department
            grDept.u_new_customer = newCust.sys_id.toString();
   			grDept.u_new_department = newDept.sys_id.toString();
//Insert Entity record
            var newEntity2 = new GlideRecord('account_relationship');
            newEntity2.initialize();
            newEntity2.from_company = newCust.sys_id;
            newEntity2.to_company = grDept.u_new_customer;
            newEntity2.relationship_type = '2d8ebaebdb775fc058fbfa5aaf9619e9';
            newEntity2.insert();

//Insert New Location to Department above
            var newLoc = new GlideRecord("cmn_location");
            newLoc.initialize();
            newLoc.name = grLoc.name;
            newLoc.u_locationtype = grLoc.u_locationtype;
            newLoc.u_department = newDept.sys_id;
            newLoc.company = newDept.company;
            newLoc.account = newDept.company;
            newLoc.street = grLoc.street;
            newLoc.city = grLoc.city;
            newLoc.state = grLoc.state;
            newLoc.zip = grLoc.zip;
            newLoc.u_address_2 = grLoc.u_address_2;
            newLoc.insert();
     		 } 
  			 }
//Update Current Department and Location
    grDept.u_active = false;
    grDept.u_status = 'Archive';
    grDept.update();
    grLoc.u_active = false;
    grLoc.update();
     }

