var grServEnt = new GlideRecord('service_entitlement');
grServEnt.addEncodedQuery('active=true^u_entitlement_type=Customer Contract Entitlement^sys_domain!=4671d3cbdb203200f5d770d9af9619e4^ORsys_domain=NULL');
grServEnt.setAutoSysFields(false);
grServEnt.setWorkflow(false);
grServEnt.queryNoDomain();
while (grServEnt.next()) {
		grServEnt.sys_domain='4671d3cbdb203200f5d770d9af9619e4';
		grServEnt.update();
	} 




		var grEQAsset = new GlideRecord('u_cmdb_ci_equipment');
		grEQAsset.addEncodedQuery("u_disposition_dateON1900-01-01@javascript:gs.dateGenerate('1900-01-01','start')@javascript:gs.dateGenerate('1900-01-01','end')");
		grEQAsset.setWorkflow(false);
grEQAsset.setAutoSysFields(false);
		grEQAsset.queryNoDomain();
		while (grEQAsset.next()) {
		grEQAsset.u_disposition_date='';
		grEQAsset.update();
	} 

	statusINrequested

	 //${URI_REF} has been reassigned to you by ${current.sys_updated_by=gs.getUserDisplayName()}

u_active=true^u_legecy_rsq_department_idSTARTSWITH1209CLINIC^company=197baba0dbca9bc848ad776baf96192e
gs.getlo




var grAttach = new GlideRecord('sys_attachment');
grAttach.addQuery('table_sys_id',current.sys_id);
grAttach.queryNoDomain();
while (grAttach.next()) {
	grAttach.name = grAttach.deleteRecord();
}
uExportPurchaseOrder(current);
gs.addInfoMessage("New PO generated");
current.update();
action.setRedirectURL(current);