function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'views/members/skills.html',
        controller: 'MemberController',
        controllerAs: 'memberCtrl',
        scope: {
            member: '='
        }
        
    };
    }