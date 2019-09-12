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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG9CQUZBO0FBR0Esd0JBSEE7QUFJQSxzQkFKQTtBQUtBO0FBQ0EsMEZBREE7QUFFQTtBQUZBO0FBTEE7QUFVQSxHQWJBOztBQWVBO0FBQ0E7Ozs7Ozs7QUFPQSxHQXZCQTs7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7O0FBSEEsR0F4QkE7QUE2QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTkE7O0FBU0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLEtBaEJBOztBQW1CQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBLDBDQURBO0FBRUE7QUFDQSw0QkFEQTtBQUVBLDRCQUZBO0FBR0E7QUFIQSxTQUZBO0FBT0Esa0JBUEE7QUFRQSxlQVJBLENBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWhDQTtBQXFDQTtBQUVBOztBQTdGQTtBQTdCQSxHIiwiZmlsZSI6ImJ1bmRsZS5mZmFkZTVkNjcyZDdlODcxYzcyNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cblxuICAgIDxHcmlkTGF5b3V0IGNsYXNzPVwicGFnZS1jb250ZW50XCI+XG4gICAgICAgXG4gICAgICAgIDxBUiB2LWlmPVwibG9hZGVkXCJcbiAgICAgICAgIDpkZXRlY3RQbGFuZXM9XCJ0cnVlXCJcbiAgICAgICAgIDpkZWJ1Z0xldmVsPVwiRkVBVFVSRV9QT0lOVFNcIlxuICAgICAgICAgOnNob3dTdGF0aXN0aWNzPVwidHJ1ZVwiXG4gICAgICAgICBAcGxhbmVEZXRlY3RlZD1cInNob3dBbGVydFwiXG4gICAgICAgICBAcGxhbmVUYXBwZWQ9XCJvblBsYW5lVGFwcGVkXCI+XG4gICAgICAgIDwvQVI+ICBcbiAgICAgICAgICBcbiAgICA8L0dyaWRMYXlvdXQ+XG5cbiAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCJcbiAgaW1wb3J0IHsgQVIsIEFSTWF0ZXJpYWwgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFyXCJcbiAgaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XG5cblxuICBleHBvcnQgZGVmYXVsdCB7XG5cbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgYWxlcnRlZDogZmFsc2UsXG4gICAgICAgIGRldGVjdFBsYW5lczogdHJ1ZSxcbiAgICAgICAgc2hvd1BsYW5lczogdHJ1ZSxcbiAgICAgICAgcGxhbmVNYXRlcmlhbDoge1xuICAgICAgICAgIGRpZmZ1c2U6IG5ldyBDb2xvcihcIndoaXRlXCIpLFxuICAgICAgICAgIHRyYW5zcGFyZW5jeTogMC4wXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbi8qXG4gICAgICBTZWxlY3RlZFBhZ2VTZXJ2aWNlLmdldEluc3RhbmNlKCkudXBkYXRlU2VsZWN0ZWRQYWdlKFwiSG9tZVwiKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnICAgLSAtIC0gTG9hZGVkJylcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgfSwgMTAwMCk7ICAgICAgXG4qL1xuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIG1lc3NhZ2UoKSB7XG4gICAgICAgIHJldHVybiBcIjwhLS0gUGFnZSBjb250ZW50IGdvZXMgaGVyZSAtLT5cIjtcbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIFxuICAgICAgc2hvd0FsZXJ0ICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWxlcnRlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmFsZXJ0ZWQgPSB0cnVlO1xuICAgICAgICBhbGVydCgnU2NhbiByZWFkeSEnKTtcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIFxuICAgICAgZ2V0UmFuZG9tQ29sb3IoKSB7XG4gICAgICAgIHZhciBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnO1xuICAgICAgICB2YXIgY29sb3IgPSAnIyc7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xvcjtcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIFxuICAgICAgb25QbGFuZVRhcHBlZChhcmdzKSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBhciA9IGFyZ3Mub2JqZWN0O1xuLyogICAgICAgIGFyLmFkZEJveCh7XG4gICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIHg6IGFyZ3MucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IGFyZ3MucG9zaXRpb24ueSxcbiAgICAgICAgICAgIHo6IGFyZ3MucG9zaXRpb24uelxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICAgICAgeDogMC4xLFxuICAgICAgICAgICAgeTogMC4xLFxuICAgICAgICAgICAgejogMC4xXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXNzOiAyMCxcbiAgICAgICAgICBtYXRlcmlhbHM6IFtuZXcgQ29sb3IodGhpcy5nZXRSYW5kb21Db2xvcigpKV1cbiAgICAgICAgfSk7Ki9cblxuLyogICAgICAgICAgYXIuYWRkVGV4dCh7XG4gICAgICAgICAgICB0ZXh0OiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpLFxuICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgeDogYXJncy5wb3NpdGlvbi54LFxuICAgICAgICAgICAgICB5OiBhcmdzLnBvc2l0aW9uLnksXG4gICAgICAgICAgICAgIHo6IGFyZ3MucG9zaXRpb24uelxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjYWxlOiAwLjA1LFxuICAgICAgICAgICAgZGVwdGg6IDEsXG4gICAgICAgICAgICBtYXRlcmlhbHM6IFtuZXcgQ29sb3IoXCJ5ZWxsb3dcIildLFxuICAgICAgICAgICAgcm90YXRpb246IHtcbiAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgeTogOTAsXG4gICAgICAgICAgICAgIHo6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTsgICovICAgICAgXG4gICAgICAgIFxuICAgICAgICAgIGFyLmFkZE1vZGVsKHtcbiAgICAgICAgICAgIG5hbWU6IFwiTW9kZWxzLnNjbmFzc2V0cy9HeXJvMS5kYWVcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgIHg6IGFyZ3MucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgeTogYXJncy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgICB6OiBhcmdzLnBvc2l0aW9uLnpcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY2FsZTogMC4xLFxuICAgICAgICAgICAgbWFzczogMFxuLy8gICAgICAgICAgICBvblRhcDogKGludGVyYWN0aW9uOiBBUk5vZGVJbnRlcmFjdGlvbikgPT4ge1xuLy8gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzcGhlcmUgdGFwcGVkOiBcIiArIGludGVyYWN0aW9uLm5vZGUuaWQgKyBcIiBhdCBcIiArIGludGVyYWN0aW9uLnRvdWNoUG9zaXRpb24pO1xuLy8gICAgICAgICAgICAgICAgLy8gbGV0J3Mgcm90YXRlIHRoZSBib3ggNSBkZWdyZWVzIHRvIHRoZSByaWdodFxuLy8gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb24ubm9kZS5yb3RhdGVCeSh7XG4vLyAgICAgICAgICAgICAgICAgIHg6IDAsXG4vLyAgICAgICAgICAgICAgICAgIHk6IDAsXG4vLyAgICAgICAgICAgICAgICAgIHo6IC01XG4vLyAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgIG9uTG9uZ1ByZXNzOiAoaW50ZXJhY3Rpb246IEFSTm9kZUludGVyYWN0aW9uKSA9PiB7XG4vLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNwaGVyZSBsb25ncHJlc3NlZDogXCIgKyBpbnRlcmFjdGlvbi5ub2RlLmlkICsgXCIgYXQgXCIgKyBpbnRlcmFjdGlvbi50b3VjaFBvc2l0aW9uKTtcbi8vICAgICAgICAgICAgICAgIC8vIGxldCdzIHJvdGF0ZSB0aGUgYm94IDUgZGVncmVlcyB0byB0aGUgbGVmdFxuLy8gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb24ubm9kZS5yb3RhdGVCeSh7XG4vLyAgICAgICAgICAgICAgICAgIHg6IDAsXG4vLyAgICAgICAgICAgICAgICAgIHk6IDAsXG4vLyAgICAgICAgICAgICAgICAgIHo6IDVcbi8vICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgICAgLy8gYW5kIG1vdmUgaXQgYSBsaXR0bGVcbi8vICAgICAgICAgICAgICAgIGludGVyYWN0aW9uLm5vZGUubW92ZUJ5KHtcbi8vICAgICAgICAgICAgICAgICAgeDogMCxcbi8vICAgICAgICAgICAgICAgICAgeTogMCxcbi8vICAgICAgICAgICAgICAgICAgejogMC4wMlxuLy8gICAgICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgIH0pOyAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUuZGlyKGFyZ3MpO1xuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuICAgIC8vIFN0YXJ0IGN1c3RvbSBjb21tb24gdmFyaWFibGVzXG4gICAgQGltcG9ydCAnLi4vYXBwLXZhcmlhYmxlcyc7XG4gICAgLy8gRW5kIGN1c3RvbSBjb21tb24gdmFyaWFibGVzXG5cbiAgICAvLyBDdXN0b20gc3R5bGVzXG4gICAgLmZhIHtcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtZGFyaztcbiAgICB9XG5cbiAgICAuaW5mbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XG4gICAgfVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=