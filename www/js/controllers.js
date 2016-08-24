angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,$ionicListDelegate,$ionicModal, $ionicActionSheet, $ionicPopup, $ionicPopover) {

    $scope.showPopover = showPopover;
  //$scope.addNewComic = addNewComic;
  //$scope.closeModal = closeModal;
  //$scope.saveComic = saveComic;
  //$scope.deleteComic = deleteComic;
  $scope.showOptions = showOptions;
  //$scope.editComic = editComic;
  //$scope.showPopover = showPopover;
  //$scope.isNew = true;
  //$scope.comic = {};
  //$scope.modal = null;
  //$scope.popover = null;
    $scope.showDeleteButtons = function() {
    $ionicListDelegate.showDelete(true);
  };
  //$scope.showOptions = showOptions;

  $ionicModal.fromTemplateUrl("templates/add_modal.html", {
  scope: $scope
  })
  .then(function(modal){
    $scope.modal = modal;
  });

  $ionicPopover.fromTemplateUrl("templates/add_popover.html", {
    scope: $scope
  })
  .then(function(popover){
    $scope.popover = popover;
  });
    function showPopover($event){
    $scope.popover.show($event);
  }

  $scope.playlists = [
    { title: 'Air tv', id: 1 ,genero:'shojo',year:2006,img:'img/airtv.jpg',temporada:'verano 2012'},
    { title: 'Angel beats', id: 2 ,genero:'shojo',year:2006, img:'img/angelbeats.jpg',temporada:'invierno 2011'},
    { title: 'Binbou Shimai Monogatari', id: 3 ,genero:'shojo',year:2006, img:'img/binboushimaimonogatari.jpg',temporada:'primavera 2012'},
    { title: 'Chrno Crusade', id: 4 ,genero:'shojo',year:2006,img:'img/chrnocrusade.jpg',temporada:'verano 2013'},
    { title: 'DD.C.: Da Capo', id: 5 ,genero:'shojo',year:2006, img:'img/d.c.dacapo.jpg',temporada:'otono 2012'},
    { title: 'Erementar Gerad', id: 6 ,genero:'shojo',year:2006, img:'img/erementargerad.jpg',temporada:'verano 2012'},
    { title: 'Furikuri', id: 7 ,genero:'shonen',year:2006, img:'img/furikuri.jpg',temporada:'primavera 2012'},
    { title: 'Gundan OO', id: 8 ,genero:'shonen',year:2006, img:'img/gundamoo.jpg',temporada:'verano 2012'},
    { title: 'Hatsukoi Limited', id: 4 ,genero:'shojo',year:2006, img:'img/hatsukoilimited.jpg',temporada:'invierno 2012'},
    { title: 'Is Pure', id: 5 ,genero:'shojo',year:2006, img:'img/ispure.jpg',temporada:'verano 2012'},
    { title: 'JoJo no Kimiyona Bouken ', id: 6 ,genero:'shonen',year:2006 ,img:'img/jojonokimiyonabouken.jpg',temporada:'otono 2012'},
    { title: 'koi kaze', id: 2 ,genero:'shojo',year:2006, img:'img/screenshot_koikaze&.jpg',temporada:'verano 2012'},
    { title: 'Lain', id: 3 ,genero:'shojo: sobrenatural, ficcion, psicologico',year:2006, img:'img/screenshot_lain&.jpg',temporada:'verano 2012'},
    { title: 'Momster', id: 4 ,genero:'shojo',year:2006, img:'img/screenshot_monster&.jpg',temporada:'verano 2012'},
    { title: 'Nyan koi', id: 5 ,genero:'shojo',year:2006 ,img:'img/screenshot_nyankoi&.jpg',temporada:'verano 2012'},
    { title: 'Ocha-ken', id: 6 ,genero:'shojo',year:2006, img:'img/screenshot_ocha-ken&.jpg',temporada:'verano 2012'},
    { title: 'Panty & Stocking with Garterbelt', id: 2 ,genero:'shojo',year:2006, img:'img/screenshot_panty&stockingwithgarterbelt&.jpg',temporada:'verano 2012'},
    { title: 'Ranma1/2', id: 3 ,genero:'shojo, comedia',year:2006 ,img:'img/screenshot_ranma12&.jpg',temporada:'verano 2012'},
    { title: 'Suzuka', id: 4 ,genero:'shojo',year:2006 ,img:'img/screenshot_suzuka&.jpg',temporada:'primavera 2012'},
    { title: 'Trinity Blood', id: 5 ,genero:'shojo',year:2006, img:'img/screenshot_trinityblood&.jpg',temporada:'primavera 2012'},
    { title: 'Umineko naku koro ni', id: 6 ,genero:'shojo',year:2006, img:'img/screenshot_uminekononakukoroni&.jpg',temporada:'invierno 2012'}
  ];
/////////////////ini////////////////////

//////////////FIN\\\\\\\\\\\\\\\\\\\\\\\\\\

    function showOptions( indexComic ){
    $ionicActionSheet.show({
         buttons: [
        { text: "<i class='icon ion-share'></i>visto" },
        { text: "<i class='icon ion-share'></i>viendo" },
        { text: "<i class='icon ion-edit'></i>me interesa" },
      ],
      destructiveText: "<i class='icon ion-trash-b'></i>Del",
      destructiveButtonClicked: function(){
        $scope.deleteComic( indexComic );
        return true;
      },
      cancelText: "Cerrar",
      buttonClicked: function( indexButton ){
        if(indexButton == 1){
          $scope.editComic( indexComic );
        }
        return true;
      }
    });
  }



})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
