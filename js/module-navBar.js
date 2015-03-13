(function(){
    var app = angular.module('navbar',[]);
    app.directive('navBar',['$http',function($http){
        return {
            restrict : 'E',
            templateUrl : '/www/template-directive-e-navBar.html',
            controller:function(){
                this.menus={};
                this.getAppMenu = function(){
                    var menu=this;
                    var uid=localStorage.getItem('lastuid');
                    var ucode=localStorage.getItem('lastucode');
                    $http.post('/core/menu/'+uid,{UCODE:ucode}).success(function(data){
                        //console.debug(data);
                        menu.menus=data.DATA;
                    });
                };
                this.gotoLink=function(link){
                    location=link;
                };
                this.getAppMenu();
                
            },
            controllerAs:'nav'

        };
    }]);
})();