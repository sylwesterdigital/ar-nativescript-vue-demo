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
      actionbartitle: 'Pixel Wars',
      msg: 'Hello World!',
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
    /*
          SelectedPageService.getInstance().updateSelectedPage("Home");
          setTimeout(() => {
            console.log('   - - - Loaded')
            this.loaded = true;
          }, 1000);      
    */
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQSxrQ0FEQTtBQUVBLHlCQUZBO0FBR0EsbUJBSEE7QUFJQSxvQkFKQTtBQUtBLHdCQUxBO0FBTUEsc0JBTkE7QUFPQTtBQUNBLDBGQURBO0FBRUE7QUFGQTtBQVBBO0FBWUEsR0FmQTs7QUFpQkE7QUFDQTs7Ozs7OztBQU9BLEdBekJBOztBQTBCQTtBQUNBO0FBQ0E7QUFDQTs7QUFIQSxHQTFCQTtBQStCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FOQTs7QUFTQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsS0FoQkE7O0FBbUJBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0EsMENBREE7QUFFQTtBQUNBLDRCQURBO0FBRUEsNEJBRkE7QUFHQTtBQUhBLFNBRkE7QUFPQSxrQkFQQTtBQVFBLGVBUkEsQ0FTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBaENBO0FBcUNBO0FBRUE7O0FBN0ZBO0FBL0JBLEciLCJmaWxlIjoiYnVuZGxlLjg3MGQ4NTQyYjZlNmQ2N2M4ZDViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxQYWdlIGNsYXNzPVwicGFnZVwiPlxuXG4gICAgPEdyaWRMYXlvdXQgY2xhc3M9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgICBcbiAgICAgICAgPEFSIHYtaWY9XCJsb2FkZWRcIlxuICAgICAgICAgOmRldGVjdFBsYW5lcz1cInRydWVcIlxuICAgICAgICAgOmRlYnVnTGV2ZWw9XCJGRUFUVVJFX1BPSU5UU1wiXG4gICAgICAgICA6c2hvd1N0YXRpc3RpY3M9XCJ0cnVlXCJcbiAgICAgICAgIEBwbGFuZURldGVjdGVkPVwic2hvd0FsZXJ0XCJcbiAgICAgICAgIEBwbGFuZVRhcHBlZD1cIm9uUGxhbmVUYXBwZWRcIj5cbiAgICAgICAgPC9BUj4gIFxuICAgICAgICAgIFxuICAgIDwvR3JpZExheW91dD5cblxuICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIlxuICBpbXBvcnQgeyBBUk1hdGVyaWFsIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hclwiXG4gIGltcG9ydCAqIGFzIGNhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xuXG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjdGlvbmJhcnRpdGxlOiAnUGl4ZWwgV2FycycsXG4gICAgICAgIG1zZzogJ0hlbGxvIFdvcmxkIScsXG4gICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgIGFsZXJ0ZWQ6IGZhbHNlLFxuICAgICAgICBkZXRlY3RQbGFuZXM6IHRydWUsXG4gICAgICAgIHNob3dQbGFuZXM6IHRydWUsXG4gICAgICAgIHBsYW5lTWF0ZXJpYWw6IHtcbiAgICAgICAgICBkaWZmdXNlOiBuZXcgQ29sb3IoXCJ3aGl0ZVwiKSxcbiAgICAgICAgICB0cmFuc3BhcmVuY3k6IDAuMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4vKlxuICAgICAgU2VsZWN0ZWRQYWdlU2VydmljZS5nZXRJbnN0YW5jZSgpLnVwZGF0ZVNlbGVjdGVkUGFnZShcIkhvbWVcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJyAgIC0gLSAtIExvYWRlZCcpXG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgIH0sIDEwMDApOyAgICAgIFxuKi9cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBtZXNzYWdlKCkge1xuICAgICAgICByZXR1cm4gXCI8IS0tIFBhZ2UgY29udGVudCBnb2VzIGhlcmUgLS0+XCI7XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBcbiAgICAgIHNob3dBbGVydCAoKSB7XG4gICAgICAgIGlmICh0aGlzLmFsZXJ0ZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5hbGVydGVkID0gdHJ1ZTtcbiAgICAgICAgYWxlcnQoJ1NjYW4gcmVhZHkhJyk7XG4gICAgICB9LFxuICAgICAgXG4gICAgICBcbiAgICAgIGdldFJhbmRvbUNvbG9yKCkge1xuICAgICAgICB2YXIgbGV0dGVycyA9ICcwMTIzNDU2Nzg5QUJDREVGJztcbiAgICAgICAgdmFyIGNvbG9yID0gJyMnO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgICB9LFxuICAgICAgXG4gICAgICBcbiAgICAgIG9uUGxhbmVUYXBwZWQoYXJncykge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgYXIgPSBhcmdzLm9iamVjdDtcbi8qICAgICAgICBhci5hZGRCb3goe1xuICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICB4OiBhcmdzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICB5OiBhcmdzLnBvc2l0aW9uLnksXG4gICAgICAgICAgICB6OiBhcmdzLnBvc2l0aW9uLnpcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgIHg6IDAuMSxcbiAgICAgICAgICAgIHk6IDAuMSxcbiAgICAgICAgICAgIHo6IDAuMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWFzczogMjAsXG4gICAgICAgICAgbWF0ZXJpYWxzOiBbbmV3IENvbG9yKHRoaXMuZ2V0UmFuZG9tQ29sb3IoKSldXG4gICAgICAgIH0pOyovXG5cbi8qICAgICAgICAgIGFyLmFkZFRleHQoe1xuICAgICAgICAgICAgdGV4dDogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgIHg6IGFyZ3MucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgeTogYXJncy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgICB6OiBhcmdzLnBvc2l0aW9uLnpcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2FsZTogMC4wNSxcbiAgICAgICAgICAgIGRlcHRoOiAxLFxuICAgICAgICAgICAgbWF0ZXJpYWxzOiBbbmV3IENvbG9yKFwieWVsbG93XCIpXSxcbiAgICAgICAgICAgIHJvdGF0aW9uOiB7XG4gICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgIHk6IDkwLFxuICAgICAgICAgICAgICB6OiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7ICAqLyAgICAgIFxuICAgICAgICBcbiAgICAgICAgICBhci5hZGRNb2RlbCh7XG4gICAgICAgICAgICBuYW1lOiBcIk1vZGVscy5zY25hc3NldHMvR3lybzEuZGFlXCIsXG4gICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICB4OiBhcmdzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICAgIHk6IGFyZ3MucG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgejogYXJncy5wb3NpdGlvbi56XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NhbGU6IDAuMSxcbiAgICAgICAgICAgIG1hc3M6IDBcbi8vICAgICAgICAgICAgb25UYXA6IChpbnRlcmFjdGlvbjogQVJOb2RlSW50ZXJhY3Rpb24pID0+IHtcbi8vICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3BoZXJlIHRhcHBlZDogXCIgKyBpbnRlcmFjdGlvbi5ub2RlLmlkICsgXCIgYXQgXCIgKyBpbnRlcmFjdGlvbi50b3VjaFBvc2l0aW9uKTtcbi8vICAgICAgICAgICAgICAgIC8vIGxldCdzIHJvdGF0ZSB0aGUgYm94IDUgZGVncmVlcyB0byB0aGUgcmlnaHRcbi8vICAgICAgICAgICAgICAgIGludGVyYWN0aW9uLm5vZGUucm90YXRlQnkoe1xuLy8gICAgICAgICAgICAgICAgICB4OiAwLFxuLy8gICAgICAgICAgICAgICAgICB5OiAwLFxuLy8gICAgICAgICAgICAgICAgICB6OiAtNVxuLy8gICAgICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICBvbkxvbmdQcmVzczogKGludGVyYWN0aW9uOiBBUk5vZGVJbnRlcmFjdGlvbikgPT4ge1xuLy8gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzcGhlcmUgbG9uZ3ByZXNzZWQ6IFwiICsgaW50ZXJhY3Rpb24ubm9kZS5pZCArIFwiIGF0IFwiICsgaW50ZXJhY3Rpb24udG91Y2hQb3NpdGlvbik7XG4vLyAgICAgICAgICAgICAgICAvLyBsZXQncyByb3RhdGUgdGhlIGJveCA1IGRlZ3JlZXMgdG8gdGhlIGxlZnRcbi8vICAgICAgICAgICAgICAgIGludGVyYWN0aW9uLm5vZGUucm90YXRlQnkoe1xuLy8gICAgICAgICAgICAgICAgICB4OiAwLFxuLy8gICAgICAgICAgICAgICAgICB5OiAwLFxuLy8gICAgICAgICAgICAgICAgICB6OiA1XG4vLyAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgICAgIC8vIGFuZCBtb3ZlIGl0IGEgbGl0dGxlXG4vLyAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbi5ub2RlLm1vdmVCeSh7XG4vLyAgICAgICAgICAgICAgICAgIHg6IDAsXG4vLyAgICAgICAgICAgICAgICAgIHk6IDAsXG4vLyAgICAgICAgICAgICAgICAgIHo6IDAuMDJcbi8vICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgICB9KTsgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmRpcihhcmdzKTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbiAgICAvLyBTdGFydCBjdXN0b20gY29tbW9uIHZhcmlhYmxlc1xuICAgIEBpbXBvcnQgJy4uL2FwcC12YXJpYWJsZXMnO1xuICAgIC8vIEVuZCBjdXN0b20gY29tbW9uIHZhcmlhYmxlc1xuXG4gICAgLy8gQ3VzdG9tIHN0eWxlc1xuICAgIC5mYSB7XG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWRhcms7XG4gICAgfVxuXG4gICAgLmluZm8ge1xuICAgICAgICBmb250LXNpemU6IDIwO1xuICAgIH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9