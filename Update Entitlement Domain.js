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
		grEQAsset.addEncodedQuery('u_account=7eed28f2dbe807802aac77e9af9619ac^u_on_call_rotaISNOTEMPTY');
		grEQAsset.setWorkflow(false);
grEQAsset.setAutoSysFields(false);
		grEQAsset.queryNoDomain();
		while (grEQAsset.next()) {
		grEQAsset.u_on_call_rota='';
		grEQAsset.update();
	} 

	statusINrequested

	 //${URI_REF} has been reassigned to you by ${current.sys_updated_by=gs.getUserDisplayName()}

