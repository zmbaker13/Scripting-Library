var grEquipDom = new GlideRecord('u_cmdb_ci_equipment');
grEquipDom.addEncodedQuery('sys_domainNSAMEASu_account.sys_domain');
grEquipDom.setWorkflow(false);
grEquipDom.setAutoSysFields(false);
grEquipDom.queryNoDomain();
while (grEquipDom.next()) {
		grEquipDom.sys_domain=grEquipDom.u_account.sys_domain;
		grEquipDom.update();
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


var grWoDom = new GlideRecord('wm_order');
grWoDom.addEncodedQuery('sys_domainNSAMEASu_account.sys_domain');
grWoDom.setWorkflow(false);
grWoDom.setAutoSysFields(false);
grWoDom.queryNoDomain();
while (grWoDom.next()) {
		grWoDom.sys_domain=grWoDom.u_account.sys_domain;
		grWoDom.update();
	}  



var grEquipDom = new GlideRecord('u_cmdb_ci_equipment');
grEquipDom.addEncodedQuery("u_device_statusIN1,4^u_disposition_dateLIKE1900");
grEquipDom.setLimit(5);
grEquipDom.setWorkflow(false);
grEquipDom.setAutoSysFields(false);
grEquipDom.queryNoDomain();
while (grEquipDom.next()) {
		grEquipDom.u_disposition_date="";
		grEquipDom.update();
	}  

	205,140