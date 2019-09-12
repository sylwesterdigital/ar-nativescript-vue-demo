<template>
  <Page class="page">
    <GridLayout class="page-content">
        <AR v-if="loaded"
         :detectPlanes="true"
         :debugLevel="FEATURE_POINTS"
         :showStatistics="true"
         @planeDetected="showAlert"
         @planeTapped="onPlaneTapped">
        </AR>  
    </GridLayout>
  </Page>
</template>

<script>
  import { Color } from "tns-core-modules/color"
  import { AR, ARMaterial } from "nativescript-ar"
  import * as camera from "nativescript-camera";
  import * as utils from "~/shared/utils";
  import SelectedPageService from "../shared/selected-page-service";  

  export default {
    data() {
      return {
        loaded: false,
        alerted: false,
        detectPlanes: true,
        showPlanes: true,
        planeMaterial: {
          diffuse: new Color("white"),
          transparency: 0.0
        }
      }
    },
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Home");
      setTimeout(() => {
        console.log('   - - - Loaded')
        this.loaded = true;
      }, 1000);      
    },
    computed: {
      message() {
        return "<!-- Page content goes here -->";
      }
    },
    methods: {
      showAlert () {
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
            mass: 0
//            onTap: (interaction: ARNodeInteraction) => {
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
  };
</script>
<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables
    // Custom styles
    .fa {
        color: $accent-dark;
    }
    .info {
        font-size: 20;
    }
</style>