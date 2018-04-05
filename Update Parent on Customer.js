var grCase = new GlideRecord('sn_customerservice_case');
grCase.addEncodedQuery('u_health_systemISEMPTY^account.account_parentISNOTEMPTY');
grCase.setWorkflow(false);
grCase.setLimit(10);
grCase.setAutoSysFields(false);
grCase.queryNoDomain();
while (grCase.next()) {
		grCase.u_health_system=grCase.account.account_parent;
		grCase.update();
	}  
	

