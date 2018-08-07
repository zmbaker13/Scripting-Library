//Query all equipment with a department that is archived
 var grEq = new GlideRecord("u_cmdb_ci_equipment");
	grEq.addQuery("department.u_status", "Archive");
	grEq.addNotNullQuery("department.u_new_customer");
	grEq.addNotNullQuery("department.u_new_department");
	grEq.setWorkflow(false);
	grEq.queryNoDomain();
//Change the Customer and Department to new records
 while(grEq.next()){
		grEq.u_account = grEq.department.u_new_customer.toString();
		grEq.department = grEq.department.u_new_department.toString();
		grEq.sys_domain = grEq.u_account.sys_domain.toString();
		grEq.update();
//Change Customer Entitlement
	var changeEnt = new GlideRecord("service_entitlement");
	changeEnt.addQuery('active', true);
	changeEnt.addQuery('u_entitlement_type', 'customer contract entitlement');
	changeEnt.addQuery("account", grEq.department.u_new_customer.toString());
	changeEnt.addQuery("u_entitlement_coverage_type", grEq.u_customer_entitlement.u_entitlement_coverage_type);
	changeEnt.queryNoDomain();
	while(changeEnt.next()){
	grEq.u_customer_entitlement = changeEnt.sys_id;
	grEq.update();
	}
 }
