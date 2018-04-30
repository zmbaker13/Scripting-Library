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
grLegacy.addEncodedQuery("u_on_call_rotaISNOTEMPTY^u_account.active=true^u_device_status!=3^ORu_device_status=^u_account!=932b5a8bdbb6f6003c9a7aa9bf961950^ORu_account=NULL^assignment_groupISEMPTY");
grLegacy.setWorkflow(false);
grLegacy.setAutoSysFields(false);
grLegacy.setLimit(1);
grLegacy.queryNoDomain();
while (grLegacy.next()) {
	//grLegacy.u_on_call_rota=grLegacy.department.u_on_call_rota;
		grLegacy.assignment_group=grLegacy.u_on_call_rota;
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




	var grEquipDom = new GlideRecord('u_cmdb_ci_equipment');
grEquipDom.addEncodedQuery("u_on_call_rotaISEMPTY^department.u_on_call_rotaISNOTEMPTY^u_account!=6ada960bdbb6f6003c9a7aa9bf9619f4^u_account!=932b5a8bdbb6f6003c9a7aa9bf961950^u_account!=81fa924bdbb6f6003c9a7aa9bf961949^u_account.active=true");
grEquipDom.setLimit(5000);
grEquipDom.setWorkflow(false);
grEquipDom.setAutoSysFields(false);
grEquipDom.queryNoDomain();
while (grEquipDom.next()) {
		grEquipDom.u_on_call_rota=grEquipDom.department.u_on_call_rota;
		grEquipDom.update();
	}  


var grEquipDom = new GlideRecord('u_cmdb_ci_equipment');
grEquipDom.addEncodedQuery("u_device_statusIN1,4^u_pm_monthISEMPTY");
grEquipDom.setWorkflow(false);
grEquipDom.setAutoSysFields(false);
grEquipDom.queryNoDomain();
while (grEquipDom.next()) {
		grEquipDom.u_pm_month=grEquipDom.department.u_default_pm_month;
		grEquipDom.update();
	}  

	HIDE ON WOT IF EMPTY


var grEquipDom = new GlideRecord('fm_expense_line');
grEquipDom.addEncodedQuery("u_work_order_task.u_customer.stateINaz,ca,nv^u_customer_invoice_amount>0^state=pending^u_customer_invoice_number=NULL");
grEquipDom.setAutoSysFields(false);
grEquipDom.queryNoDomain();
while (grEquipDom.next()) {
		grEquipDom.short_description="1";
		grEquipDom.update();
	}  


u_customer_invoice_number=NULL^state!=processed^ORstate=^u_customer_invoice_amount>0^short_description=NULL

-20

