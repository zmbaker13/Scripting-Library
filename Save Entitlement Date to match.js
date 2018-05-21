var grServEnt = new GlideRecord('service_entitlement');
grServEnt.addEncodedQuery("active=true^u_entitlement_type=Vendor Contract Entitlement^u_removed_dateMORETHANend_date@day@before@0");
grServEnt.setAutoSysFields(false);
grServEnt.queryNoDomain();
while (grServEnt.next()) {
		grServEnt.end_date=grServEnt.u_removed_date;
		grServEnt.update();
	}