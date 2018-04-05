var grServEnt = new GlideRecord('service_entitlement');
grServEnt.addEncodedQuery('u_entitlement_type=Vendor Contract Entitlement^');
grServEnt.setAutoSysFields(false);
grServEnt.setWorkflow(false);
grServEnt.queryNoDomain();
while (grServEnt.next()) {
		grServEnt.sys_domain='4671d3cbdb203200f5d770d9af9619e4';
		grServEnt.update();
	} 