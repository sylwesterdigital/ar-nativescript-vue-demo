<template>
  <Page class="page">
    <GridLayout class="page-content" columns="*" rows="*,200">>
        <AR row="0" col="0" rowSpan="2"
          detectPlanes="true"
          debugLevel="FEATURE_POINTS"
          showStatistics="true"
          :trackingMode="trackingMode"
          :trackingImagesBundle="trackingImagesBundle"
          @trackingFaceDetected="onTrackingFaceDetected"
          @trackingImageDetected="onTrackingImageDetected"
          @arLoaded="onARLoaded"
          @planeDetected="showAlert"
          @planeTapped="onPlaneTapped">
        </AR>
        <ListPicker row="1" col="0"
        :items="listOfTrackingModes"
        selectedIndex="0"
        @selectedIndexChange="onSelectedTrackingModeChanged" />
    </GridLayout>
  </Page>
</template>

<script>
  
  import { Color } from "tns-core-modules/color"
  import { AR, ARMaterial } from "nativescript-ar"
  import * as camera from "nativescript-camera";
  
/*
  import * as utils from "~/shared/utils";
  import SelectedPageService from "../shared/selected-page-service";  
*/

  export default {
    
    data() {
      return {
        shareButtonText: "Share",
        loaded: false,
        alerted: false,
        detectPlanes: true,
        showPlanes: true,
        planeMaterial: {
          diffuse: new Color("white"),
          transparency: 0.0
        },
        trackingMode: "WORLD", // "WORLD" , "IMAGE", "FACE"
        listOfTrackingModes: ["WORLD" , "IMAGE", "FACE"],
        trackingImagesBundle: "AR Resources"
      }
    },
    
    mounted() {
/*      SelectedPageService.getInstance().updateSelectedPage("Home");
      setTimeout(() => {
        console.log('   - - - Loaded')
        this.loaded = true;
      }, 1000); */     
    },
    
    methods: {
      
      onSelectedTrackingModeChanged(e) {
        this.trackingMode = this.listOfTrackingModes[e.value];
        console.log("Mode Change: ",this.trackingMode)
        
      },
      
      shareDemo() {
        console.log('share demo');
        
      },      
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
      
      onARLoaded() {
        console.log(' * AR LOADED * ');
        
      },
      
      onTrackingImageDetected(ev) {
        console.log(' !! * TRACKING IMAGE DETECTED * ');
        console.dir(ev.position);
        
        
      },
      
      onTrackingFaceDetected() {
        console.log(' !! * * FACE DETECTED')
        
        
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
            name: "Models.scnassets/Walking.dae",
            position: {
              x: args.position.x,
              y: args.position.y,
              z: args.position.z
            },
            scale: 0.001,
            mass: 0,
            onTap: (interaction) => {
                console.log("sphere tapped: " + interaction.node.id + " at " + interaction.touchPosition);
                interaction.node.rotateBy({
                  x: 0,
                  y: 10,
                  z: 0
                });
              },
//              onLongPress: (interaction) => {
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