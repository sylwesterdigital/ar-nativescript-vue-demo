webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/color/color.js");
/* harmony import */ var tns_core_modules_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_color__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_ar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-ar/ar.js");
/* harmony import */ var nativescript_ar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_ar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-camera/camera.js");
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_camera__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./shared/utils.js");
/* harmony import */ var _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./shared/selected-page-service.js");
/* harmony import */ var _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shared_selected_page_service__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      loaded: false,
      alerted: false,
      detectPlanes: true,
      showPlanes: true,
      planeMaterial: {
        diffuse: new tns_core_modules_color__WEBPACK_IMPORTED_MODULE_0__["Color"]("white"),
        transparency: 0.0
      }
    };
  },

  mounted() {
    _shared_selected_page_service__WEBPACK_IMPORTED_MODULE_4___default.a.getInstance().updateSelectedPage("Home");
    setTimeout(() => {
      console.log('   - - - Loaded');
      this.loaded = true;
    }, 1000);
  },

  computed: {
    message() {
      return "<!-- Page content goes here -->";
    }

  },
  methods: {
    showAlert() {
      if (this.alerted) return;
      this.alerted = true;
      alert('Scan ready!');
    },

    getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';

      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      return color;
    },

    onPlaneTapped(args) {
      const ar = args.object;
      /*        ar.addBox({
                position: {
                  x: args.position.x,
                  y: args.position.y,
                  z: args.position.z
                },
                dimensions: {
                  x: 0.1,
                  y: 0.1,
                  z: 0.1
                },
                mass: 20,
                materials: [new Color(this.getRandomColor())]
              });*/

      /*          ar.addText({
                  text: new Date().toLocaleTimeString(),
                  position: {
                    x: args.position.x,
                    y: args.position.y,
                    z: args.position.z
                  },
                  scale: 0.05,
                  depth: 1,
                  materials: [new Color("yellow")],
                  rotation: {
                    x: 0,
                    y: 90,
                    z: 0
                  }
                });  */

      ar.addModel({
        name: "Models.scnassets/Gyro1.dae",
        position: {
          x: args.position.x,
          y: args.position.y,
          z: args.position.z
        },
        scale: 0.1,
        mass: 0 //            onTap: (interaction: ARNodeInteraction) => {
        //                console.log("sphere tapped: " + interaction.node.id + " at " + interaction.touchPosition);
        //                // let's rotate the box 5 degrees to the right
        //                interaction.node.rotateBy({
        //                  x: 0,
        //                  y: 0,
        //                  z: -5
        //                });
        //              },
        //              onLongPress: (interaction: ARNodeInteraction) => {
        //                console.log("sphere longpressed: " + interaction.node.id + " at " + interaction.touchPosition);
        //                // let's rotate the box 5 degrees to the left
        //                interaction.node.rotateBy({
        //                  x: 0,
        //                  y: 0,
        //                  z: 5
        //                });
        //                // and move it a little
        //                interaction.node.moveBy({
        //                  x: 0,
        //                  y: 0,
        //                  z: 0.02
        //                });
        //              }            

      });
      console.dir(args);
    }

  }
});

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.js": "./app.js",
	"./app.scss": "./app.scss",
	"./shared/selected-page-service.js": "./shared/selected-page-service.js",
	"./shared/utils.js": "./shared/utils.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./shared/selected-page-service.js":
/***/ (function(module, exports, __webpack_require__) {

const {
  BehaviorSubject
} = __webpack_require__("../node_modules/rxjs/_esm5/index.js");

function SelectedPageService() {
  if (SelectedPageService._instance) {
    throw new Error("Use SelectedPageService.getInstance() instead of new.");
  } // Observable selectedPage source


  this._selectedPageSource = new BehaviorSubject(""); // Observable selectedPage stream

  this.selectedPage$ = this._selectedPageSource.asObservable();

  this.updateSelectedPage = function (selectedPage) {
    this._selectedPageSource.next(selectedPage);
  };
}

SelectedPageService.getInstance = function () {
  return SelectedPageService._instance;
};

SelectedPageService._instance = new SelectedPageService();
module.exports = SelectedPageService;

/***/ }),

/***/ "./shared/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDrawer", function() { return showDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeDrawer", function() { return closeDrawer; });
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__);

const showDrawer = () => {
  let drawerNativeView = Object(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["getRootView"])();

  if (drawerNativeView && drawerNativeView.showDrawer) {
    drawerNativeView.showDrawer();
  }
};
const closeDrawer = () => {
  let drawerNativeView = Object(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["getRootView"])();

  if (drawerNativeView && drawerNativeView.showDrawer) {
    drawerNativeView.closeDrawer();
  }
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL3NoYXJlZC9zZWxlY3RlZC1wYWdlLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkJlaGF2aW9yU3ViamVjdCIsInJlcXVpcmUiLCJTZWxlY3RlZFBhZ2VTZXJ2aWNlIiwiX2luc3RhbmNlIiwiRXJyb3IiLCJfc2VsZWN0ZWRQYWdlU291cmNlIiwic2VsZWN0ZWRQYWdlJCIsImFzT2JzZXJ2YWJsZSIsInVwZGF0ZVNlbGVjdGVkUGFnZSIsInNlbGVjdGVkUGFnZSIsIm5leHQiLCJnZXRJbnN0YW5jZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzaG93RHJhd2VyIiwiZHJhd2VyTmF0aXZlVmlldyIsImdldFJvb3RWaWV3IiwiY2xvc2VEcmF3ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG9CQUZBO0FBR0Esd0JBSEE7QUFJQSxzQkFKQTtBQUtBO0FBQ0EsMEZBREE7QUFFQTtBQUZBO0FBTEE7QUFVQSxHQWJBOztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBLEVBR0EsSUFIQTtBQUlBLEdBckJBOztBQXNCQTtBQUNBO0FBQ0E7QUFDQTs7QUFIQSxHQXRCQTtBQTJCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FOQTs7QUFTQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsS0FoQkE7O0FBbUJBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0EsMENBREE7QUFFQTtBQUNBLDRCQURBO0FBRUEsNEJBRkE7QUFHQTtBQUhBLFNBRkE7QUFPQSxrQkFQQTtBQVFBLGVBUkEsQ0FTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBaENBO0FBcUNBO0FBRUE7O0FBN0ZBO0FBM0JBLEc7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIOzs7Ozs7O0FDMUJBLE1BQU07QUFBRUE7QUFBRixJQUFzQkMsbUJBQU8sQ0FBQyxxQ0FBRCxDQUFuQzs7QUFFQSxTQUFTQyxtQkFBVCxHQUErQjtBQUMzQixNQUFJQSxtQkFBbUIsQ0FBQ0MsU0FBeEIsRUFBbUM7QUFDL0IsVUFBTSxJQUFJQyxLQUFKLENBQVUsdURBQVYsQ0FBTjtBQUNILEdBSDBCLENBSzNCOzs7QUFDQSxPQUFLQyxtQkFBTCxHQUEyQixJQUFJTCxlQUFKLENBQW9CLEVBQXBCLENBQTNCLENBTjJCLENBUTNCOztBQUNBLE9BQUtNLGFBQUwsR0FBcUIsS0FBS0QsbUJBQUwsQ0FBeUJFLFlBQXpCLEVBQXJCOztBQUVBLE9BQUtDLGtCQUFMLEdBQTBCLFVBQVNDLFlBQVQsRUFBdUI7QUFDN0MsU0FBS0osbUJBQUwsQ0FBeUJLLElBQXpCLENBQThCRCxZQUE5QjtBQUNILEdBRkQ7QUFHSDs7QUFFRFAsbUJBQW1CLENBQUNTLFdBQXBCLEdBQWtDLFlBQVk7QUFDMUMsU0FBT1QsbUJBQW1CLENBQUNDLFNBQTNCO0FBQ0gsQ0FGRDs7QUFJQUQsbUJBQW1CLENBQUNDLFNBQXBCLEdBQWdDLElBQUlELG1CQUFKLEVBQWhDO0FBRUFVLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlgsbUJBQWpCLEM7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1ZLFVBQVUsR0FBRyxNQUFNO0FBQzVCLE1BQUlDLGdCQUFnQixHQUFHQyxnRkFBVyxFQUFsQzs7QUFDQSxNQUFJRCxnQkFBZ0IsSUFBSUEsZ0JBQWdCLENBQUNELFVBQXpDLEVBQXFEO0FBQ2pEQyxvQkFBZ0IsQ0FBQ0QsVUFBakI7QUFDSDtBQUNKLENBTE07QUFPQSxNQUFNRyxXQUFXLEdBQUcsTUFBTTtBQUM3QixNQUFJRixnQkFBZ0IsR0FBR0MsZ0ZBQVcsRUFBbEM7O0FBQ0EsTUFBSUQsZ0JBQWdCLElBQUlBLGdCQUFnQixDQUFDRCxVQUF6QyxFQUFxRDtBQUNqREMsb0JBQWdCLENBQUNFLFdBQWpCO0FBQ0g7QUFDSixDQUxNLEMiLCJmaWxlIjoiYnVuZGxlLjJmZTEwZWJiMjE0Njk3ZTc2MzQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxQYWdlIGNsYXNzPVwicGFnZVwiPlxuXG4gICAgPEdyaWRMYXlvdXQgY2xhc3M9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgICBcbiAgICAgICAgPEFSIHYtaWY9XCJsb2FkZWRcIlxuICAgICAgICAgOmRldGVjdFBsYW5lcz1cInRydWVcIlxuICAgICAgICAgOmRlYnVnTGV2ZWw9XCJGRUFUVVJFX1BPSU5UU1wiXG4gICAgICAgICA6c2hvd1N0YXRpc3RpY3M9XCJ0cnVlXCJcbiAgICAgICAgIEBwbGFuZURldGVjdGVkPVwic2hvd0FsZXJ0XCJcbiAgICAgICAgIEBwbGFuZVRhcHBlZD1cIm9uUGxhbmVUYXBwZWRcIj5cbiAgICAgICAgPC9BUj4gIFxuICAgICAgICAgIFxuICAgIDwvR3JpZExheW91dD5cblxuICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIlxuICBpbXBvcnQgeyBBUiwgQVJNYXRlcmlhbCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYXJcIlxuICBpbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcbiAgXG4gIGltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ+L3NoYXJlZC91dGlsc1wiO1xuICBpbXBvcnQgU2VsZWN0ZWRQYWdlU2VydmljZSBmcm9tIFwiLi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZVwiOyAgXG5cblxuICBleHBvcnQgZGVmYXVsdCB7XG5cbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgYWxlcnRlZDogZmFsc2UsXG4gICAgICAgIGRldGVjdFBsYW5lczogdHJ1ZSxcbiAgICAgICAgc2hvd1BsYW5lczogdHJ1ZSxcbiAgICAgICAgcGxhbmVNYXRlcmlhbDoge1xuICAgICAgICAgIGRpZmZ1c2U6IG5ldyBDb2xvcihcIndoaXRlXCIpLFxuICAgICAgICAgIHRyYW5zcGFyZW5jeTogMC4wXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgIFNlbGVjdGVkUGFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKS51cGRhdGVTZWxlY3RlZFBhZ2UoXCJIb21lXCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcgICAtIC0gLSBMb2FkZWQnKVxuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICB9LCAxMDAwKTsgICAgICBcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBtZXNzYWdlKCkge1xuICAgICAgICByZXR1cm4gXCI8IS0tIFBhZ2UgY29udGVudCBnb2VzIGhlcmUgLS0+XCI7XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBcbiAgICAgIHNob3dBbGVydCAoKSB7XG4gICAgICAgIGlmICh0aGlzLmFsZXJ0ZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5hbGVydGVkID0gdHJ1ZTtcbiAgICAgICAgYWxlcnQoJ1NjYW4gcmVhZHkhJyk7XG4gICAgICB9LFxuICAgICAgXG4gICAgICBcbiAgICAgIGdldFJhbmRvbUNvbG9yKCkge1xuICAgICAgICB2YXIgbGV0dGVycyA9ICcwMTIzNDU2Nzg5QUJDREVGJztcbiAgICAgICAgdmFyIGNvbG9yID0gJyMnO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgICB9LFxuICAgICAgXG4gICAgICBcbiAgICAgIG9uUGxhbmVUYXBwZWQoYXJncykge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgYXIgPSBhcmdzLm9iamVjdDtcbi8qICAgICAgICBhci5hZGRCb3goe1xuICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICB4OiBhcmdzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICB5OiBhcmdzLnBvc2l0aW9uLnksXG4gICAgICAgICAgICB6OiBhcmdzLnBvc2l0aW9uLnpcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIHg6IDAuMSxcbiAgICAgICAgICAgIHk6IDAuMSxcbiAgICAgICAgICAgIHo6IDAuMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWFzczogMjAsXG4gICAgICAgICAgbWF0ZXJpYWxzOiBbbmV3IENvbG9yKHRoaXMuZ2V0UmFuZG9tQ29sb3IoKSldXG4gICAgICAgIH0pOyovXG5cbi8qICAgICAgICAgIGFyLmFkZFRleHQoe1xuICAgICAgICAgICAgdGV4dDogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgIHg6IGFyZ3MucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgeTogYXJncy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgICB6OiBhcmdzLnBvc2l0aW9uLnpcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2FsZTogMC4wNSxcbiAgICAgICAgICAgIGRlcHRoOiAxLFxuICAgICAgICAgICAgbWF0ZXJpYWxzOiBbbmV3IENvbG9yKFwieWVsbG93XCIpXSxcbiAgICAgICAgICAgIHJvdGF0aW9uOiB7XG4gICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgIHk6IDkwLFxuICAgICAgICAgICAgICB6OiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7ICAqLyAgICAgIFxuICAgICAgICBcbiAgICAgICAgICBhci5hZGRNb2RlbCh7XG4gICAgICAgICAgICBuYW1lOiBcIk1vZGVscy5zY25hc3NldHMvR3lybzEuZGFlXCIsXG4gICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICB4OiBhcmdzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICAgIHk6IGFyZ3MucG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgejogYXJncy5wb3NpdGlvbi56XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NhbGU6IDAuMSxcbiAgICAgICAgICAgIG1hc3M6IDBcbi8vICAgICAgICAgICAgb25UYXA6IChpbnRlcmFjdGlvbjogQVJOb2RlSW50ZXJhY3Rpb24pID0+IHtcbi8vICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3BoZXJlIHRhcHBlZDogXCIgKyBpbnRlcmFjdGlvbi5ub2RlLmlkICsgXCIgYXQgXCIgKyBpbnRlcmFjdGlvbi50b3VjaFBvc2l0aW9uKTtcbi8vICAgICAgICAgICAgICAgIC8vIGxldCdzIHJvdGF0ZSB0aGUgYm94IDUgZGVncmVlcyB0byB0aGUgcmlnaHRcbi8vICAgICAgICAgICAgICAgIGludGVyYWN0aW9uLm5vZGUucm90YXRlQnkoe1xuLy8gICAgICAgICAgICAgICAgICB4OiAwLFxuLy8gICAgICAgICAgICAgICAgICB5OiAwLFxuLy8gICAgICAgICAgICAgICAgICB6OiAtNVxuLy8gICAgICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICBvbkxvbmdQcmVzczogKGludGVyYWN0aW9uOiBBUk5vZGVJbnRlcmFjdGlvbikgPT4ge1xuLy8gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzcGhlcmUgbG9uZ3ByZXNzZWQ6IFwiICsgaW50ZXJhY3Rpb24ubm9kZS5pZCArIFwiIGF0IFwiICsgaW50ZXJhY3Rpb24udG91Y2hQb3NpdGlvbik7XG4vLyAgICAgICAgICAgICAgICAvLyBsZXQncyByb3RhdGUgdGhlIGJveCA1IGRlZ3JlZXMgdG8gdGhlIGxlZnRcbi8vICAgICAgICAgICAgICAgIGludGVyYWN0aW9uLm5vZGUucm90YXRlQnkoe1xuLy8gICAgICAgICAgICAgICAgICB4OiAwLFxuLy8gICAgICAgICAgICAgICAgICB5OiAwLFxuLy8gICAgICAgICAgICAgICAgICB6OiA1XG4vLyAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgICAgIC8vIGFuZCBtb3ZlIGl0IGEgbGl0dGxlXG4vLyAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbi5ub2RlLm1vdmVCeSh7XG4vLyAgICAgICAgICAgICAgICAgIHg6IDAsXG4vLyAgICAgICAgICAgICAgICAgIHk6IDAsXG4vLyAgICAgICAgICAgICAgICAgIHo6IDAuMDJcbi8vICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgICB9KTsgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmRpcihhcmdzKTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbiAgICAvLyBTdGFydCBjdXN0b20gY29tbW9uIHZhcmlhYmxlc1xuICAgIEBpbXBvcnQgJy4uL2FwcC12YXJpYWJsZXMnO1xuICAgIC8vIEVuZCBjdXN0b20gY29tbW9uIHZhcmlhYmxlc1xuXG4gICAgLy8gQ3VzdG9tIHN0eWxlc1xuICAgIC5mYSB7XG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWRhcms7XG4gICAgfVxuXG4gICAgLmluZm8ge1xuICAgICAgICBmb250LXNpemU6IDIwO1xuICAgIH1cbjwvc3R5bGU+XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIixcblx0XCIuL2FwcC5zY3NzXCI6IFwiLi9hcHAuc2Nzc1wiLFxuXHRcIi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZS5qc1wiOiBcIi4vc2hhcmVkL3NlbGVjdGVkLXBhZ2Utc2VydmljZS5qc1wiLFxuXHRcIi4vc2hhcmVkL3V0aWxzLmpzXCI6IFwiLi9zaGFyZWQvdXRpbHMuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKilcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiY29uc3QgeyBCZWhhdmlvclN1YmplY3QgfSA9IHJlcXVpcmUoXCJyeGpzXCIpO1xuXG5mdW5jdGlvbiBTZWxlY3RlZFBhZ2VTZXJ2aWNlKCkge1xuICAgIGlmIChTZWxlY3RlZFBhZ2VTZXJ2aWNlLl9pbnN0YW5jZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2UgU2VsZWN0ZWRQYWdlU2VydmljZS5nZXRJbnN0YW5jZSgpIGluc3RlYWQgb2YgbmV3LlwiKTtcbiAgICB9XG5cbiAgICAvLyBPYnNlcnZhYmxlIHNlbGVjdGVkUGFnZSBzb3VyY2VcbiAgICB0aGlzLl9zZWxlY3RlZFBhZ2VTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFwiXCIpO1xuXG4gICAgLy8gT2JzZXJ2YWJsZSBzZWxlY3RlZFBhZ2Ugc3RyZWFtXG4gICAgdGhpcy5zZWxlY3RlZFBhZ2UkID0gdGhpcy5fc2VsZWN0ZWRQYWdlU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgdGhpcy51cGRhdGVTZWxlY3RlZFBhZ2UgPSBmdW5jdGlvbihzZWxlY3RlZFBhZ2UpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRQYWdlU291cmNlLm5leHQoc2VsZWN0ZWRQYWdlKTtcbiAgICB9O1xufVxuXG5TZWxlY3RlZFBhZ2VTZXJ2aWNlLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBTZWxlY3RlZFBhZ2VTZXJ2aWNlLl9pbnN0YW5jZTtcbn07XG5cblNlbGVjdGVkUGFnZVNlcnZpY2UuX2luc3RhbmNlID0gbmV3IFNlbGVjdGVkUGFnZVNlcnZpY2UoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWxlY3RlZFBhZ2VTZXJ2aWNlO1xuIiwiXG5pbXBvcnQgeyBnZXRSb290VmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCJcblxuZXhwb3J0IGNvbnN0IHNob3dEcmF3ZXIgPSAoKSA9PiB7XG4gICAgbGV0IGRyYXdlck5hdGl2ZVZpZXcgPSBnZXRSb290VmlldygpO1xuICAgIGlmIChkcmF3ZXJOYXRpdmVWaWV3ICYmIGRyYXdlck5hdGl2ZVZpZXcuc2hvd0RyYXdlcikge1xuICAgICAgICBkcmF3ZXJOYXRpdmVWaWV3LnNob3dEcmF3ZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBjbG9zZURyYXdlciA9ICgpID0+IHtcbiAgICBsZXQgZHJhd2VyTmF0aXZlVmlldyA9IGdldFJvb3RWaWV3KCk7XG4gICAgaWYgKGRyYXdlck5hdGl2ZVZpZXcgJiYgZHJhd2VyTmF0aXZlVmlldy5zaG93RHJhd2VyKSB7XG4gICAgICAgIGRyYXdlck5hdGl2ZVZpZXcuY2xvc2VEcmF3ZXIoKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==