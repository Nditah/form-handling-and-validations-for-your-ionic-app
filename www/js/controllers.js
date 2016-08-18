angular.module('controllers', [])

.controller('FormCtrl', function($scope, $state, i18n) {
  var pepe = i18n.phonenumbers.PhoneNumberUtil.getInstance();

  console.log(pepe.parse('202-456-1414', 'US'););

  debugger;

  $scope.countries = [{
    iso: 'USA',
    name: 'United States',
    code: '+1'
  }, {
    iso: 'UY',
    name: 'Uruguay',
    code: '+598'
  }];

  $scope.user ={
    gender: 'Male',
    country: {iso: 'USA', code: '+1'},
    phone: '',
    username: '',
    name: '',
    surname: '',
    email: '',
    password: '',
    confirm_password: ''};

  $scope.submit = function(user){
    var pass = user.password,
        confirm_pass = user.confirm_password;
    if(pass != confirm_pass){
      $scope.not_match_password = "true";
    }
    else{
      $scope.not_match_password = "";
    }
    if(user.accept){
      $scope.not_accept_terms = "";
    }
    else{
      $scope.not_accept_terms = "true";
    }
  }
})

;
