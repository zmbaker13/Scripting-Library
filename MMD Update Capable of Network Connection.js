	updateNetwork();
	function updateNetwork(){

		var grMMDNet = new GlideRecord('cmdb_hardware_product_model');
		grMMDNet.query();
		grMMDNet.setValue('u_capable_of_network_connection',false);
		grMMDNet.updateMultiple();
	}