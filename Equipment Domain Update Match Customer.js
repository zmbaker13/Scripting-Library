var grLegacy = new GlideRecord('u_cmdb_ci_equipment');
grLegacy.addEncodedQuery('sys_domainNSAMEASu_account.sys_domain^u_account.active=true^u_account=743bda8bdbb6f6003c9a7aa9bf9619bb');
grLegacy.setWorkflow(false);
grLegacy.queryNoDomain();
while (grLegacy.next()) {
		grLegacy.sys_domain=grLegacy.u_account.sys_domain;
		grLegacy.update();
	}  


var grLegacy = new GlideRecord('u_cmdb_ci_equipment');
grLegacy.addEncodedQuery("u_account.revenue_per_year=javascript:global.getCurrencyFilter('customer_account','revenue_per_year', 'USD;31')^u_on_call_rotaISEMPTY^u_account.u_cost_centerISNOTEMPTY");
grLegacy.setWorkflow(false);
grLegacy.setLimit(1);
grLegacy.queryNoDomain();
while (grLegacy.next()) {
		grLegacy.u_on_call_rota=grLegacy.department.u_on_call_rota;
		grLegacy.assignment_group=grLegacy.department.u_default_assignment_group;
		grLegacy.update();
	}  
