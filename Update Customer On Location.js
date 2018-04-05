var grContact = new GlideRecord('cmn_location');
grContact.addEncodedQuery('u_department!=ba237243db68cb40ae80f8621f9619c5^ORu_department=NULL^name=PRIMARY^accountNSAMEAScompany.ref_customer_account...');
grContact.setWorkflow(false);
grContact.setLimit(1);
grContact.queryNoDomain();
while (grContact.next()) {
		grContact.company=grContact.account;
		grContact.update();
	}  



	Rename software tab to operating system
	move application name to mds2


	u_work_order_type=Preventative Maintenance^u_cancellation_approval=Approved



	