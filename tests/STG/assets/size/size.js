!function(a){var b={};b.init=function(){a.debugging("alerts: Initiating","report"),$(".js-alertclose").on("click",function(){a.debugging("alerts: Closing alert","interaction");var b=$(this).parent(".alert");b.addClass("is-closed").attr("aria-hidden","true")})},a.alerts=b,a.alerts.init()}(GUI);