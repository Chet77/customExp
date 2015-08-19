var Formatter = {
	uppercaseFirstChar : function(sStr) {
		return sStr.charAt(0).toUpperCase() + sStr.slice(1);
	},

	discontinuedStatusState : function(sDate) {
		return sDate ? "Error" : "None";
	},

	discontinuedStatusValue : function(sDate) {
		return sDate ? "Discontinued" : "";
	},

	currencyValue : function (value) {
		return parseFloat(value).toFixed(2);
	},
	
	removeInitialZeros : function (value){
	    if(value=== undefined || value === null){
	        return null;
	    }
	    return "Employee Id: " + value.replace(/^0+(?!\.|$)/, '');
	}

};