"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3911],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return p}});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=o.createContext({}),s=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),p=a,f=c["".concat(u,".").concat(p)]||c[p]||h[p]||n;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},571:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var o=r(7462),a=r(3366),n=(r(7294),r(3905)),i=["components"],l={id:"flash",title:"Flashing Firmware to your keyboard",slug:"/flash"},u=void 0,s={unversionedId:"flash",id:"flash",title:"Flashing Firmware to your keyboard",description:"nRF52832 Boards",source:"@site/docs/flashing_firmware.md",sourceDirName:".",slug:"/flash",permalink:"/docs/flash",editUrl:"https://github.com/jpconstantineau/BlueMicro_BLE/tree/documentation-docusaurus/documentation/docs/flashing_firmware.md",tags:[],version:"current",frontMatter:{id:"flash",title:"Flashing Firmware to your keyboard",slug:"/flash"},sidebar:"someSidebar",previous:{title:"Building Firmware",permalink:"/docs/build"},next:{title:"Adding a new Keyboard",permalink:"/docs/add"}},d=[{value:"nRF52832 Boards",id:"nrf52832-boards",children:[{value:"Serial Upload using Arduino IDE",id:"serial-upload-using-arduino-ide",children:[],level:3},{value:"SWD Upload",id:"swd-upload",children:[],level:3}],level:2},{value:"nRF52840 Boards",id:"nrf52840-boards",children:[{value:"Using UF2 Upload Method",id:"using-uf2-upload-method",children:[],level:3},{value:"Using Serial Upload Method and Arduino Tooling",id:"using-serial-upload-method-and-arduino-tooling",children:[],level:3}],level:2}],h={toc:d};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"nrf52832-boards"},"nRF52832 Boards"),(0,n.kt)("p",null,"The nRF52832 does not have on-chip USB support.  As such, you need to use the on board serial adapter to connect your computer to the nRF52832 for flashing a new firmware.  Depending on whether your hardware has on-board serial or not, you will need a serial USB adapter.  Note that the hardware is +3.3V.  As such, a standard +5V serial adapter may damage the nRF52 processor."),(0,n.kt)("p",null,'On reboot, the Adafruit_nRF52_Bootloader briefly listens to the serial UART for a firmware upgrade connection.  Note that unlike for the nRF52840, the bootloader does not provide for a "double-reset" trigger to go (and remain) into firmware upgrade mode.  Because of the very brief period in which the bootloader listens for a firmware update, it is recommended to use a controller which has the serial adapter on-board with the necessary reset circuitry installed.  This circuitry connects the DTR line from the serial chip to the reset line through a capacitor. See the circuit diagram for the ',(0,n.kt)("a",{parentName:"p",href:"https://cdn-learn.adafruit.com/assets/assets/000/052/793/original/microcontrollers_revgsch.png?1523067417"},"Adafruit Feather nrf52832")," for an example of such circuitry."),(0,n.kt)("h3",{id:"serial-upload-using-arduino-ide"},"Serial Upload using Arduino IDE"),(0,n.kt)("p",null,"This step assumes you have the firmware already initialized and downloaded from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jpconstantineau/BlueMicro_Builder"},"BlueMicro Builder")," Github actions tool.  You need the entire repository and not the artifact generated by the github action."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Start the Arduino IDE"),(0,n.kt)("li",{parentName:"ul"},"Open the firmware"),(0,n.kt)("li",{parentName:"ul"},'Select the board from the Arduino IDE "Tools -> Board" Menu'),(0,n.kt)("li",{parentName:"ul"},'Connect your keyboard. A new serial port should show up in the "Tools -> Port" menu. '),(0,n.kt)("li",{parentName:"ul"},'Select the serial port of your keyboard in the "Tools -> Port" menu. '),(0,n.kt)("li",{parentName:"ul"},"Compile your keyboard using the \u2714\ufe0f button in the toolbar"),(0,n.kt)("li",{parentName:"ul"},"Flash (upload) your keyboard using the \u27a1\ufe0f button in the toolbar")),(0,n.kt)("h3",{id:"swd-upload"},"SWD Upload"),(0,n.kt)("p",null,'If you do not have an on-board serial adapter that triggers the reset circuitry, it may be easier to flash the nRF52832 using a SWD programmer.  At this point, this upload method is not considered "easy" from a setup point of view as the methods differs between SWD programmers.  You can use the hex or bin files provided as part of the github action artifact.'),(0,n.kt)("h2",{id:"nrf52840-boards"},"nRF52840 Boards"),(0,n.kt)("p",null,"The Adafruit_nRF52_Bootloader supports both serial and UF2 flashing for nRF52840 chips."),(0,n.kt)("h3",{id:"using-uf2-upload-method"},"Using UF2 Upload Method"),(0,n.kt)("p",null,"This step assumes you have the firmware already initialized and compiled using the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jpconstantineau/BlueMicro_Builder"},"BlueMicro Builder")," Github actions tool.  You just need to download the GitHub Actions artifact and uncompress the artifact zip file. It will contain the UF2 file you need."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Have your UF2 file ready"),(0,n.kt)("li",{parentName:"ul"},"Connect your keyboard to your computer"),(0,n.kt)("li",{parentName:"ul"},'A new "drive" should show up for your keyboard'),(0,n.kt)("li",{parentName:"ul"},"Copy (drag/drop) the UF2 file to this drive"),(0,n.kt)("li",{parentName:"ul"},"Once the copy is complete, the keyboard will reset automatically.  This may cause the operating system to give you a error (failed to copy) as it won't have access to the drive anymore to verify that the copy was successful.  This is OK: the firmware has been flashed.")),(0,n.kt)("h3",{id:"using-serial-upload-method-and-arduino-tooling"},"Using Serial Upload Method and Arduino Tooling"),(0,n.kt)("p",null,"This step assumes you have the firmware already initialized and downloaded from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jpconstantineau/BlueMicro_Builder"},"BlueMicro Builder")," Github actions tool.  You need the entire repository and not the artifact generated by the github action."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Start the Arduino IDE"),(0,n.kt)("li",{parentName:"ul"},"Open the firmware"),(0,n.kt)("li",{parentName:"ul"},'Select the board from the Arduino IDE "Tools -> Board" Menu'),(0,n.kt)("li",{parentName:"ul"},'Connect your keyboard. A new serial port should show up in the "Tools -> Port" menu. Note that you may need to "double-reset" your board to be able to select the correct serial port.'),(0,n.kt)("li",{parentName:"ul"},'Select the serial port of your keyboard in the "Tools -> Port" menu. '),(0,n.kt)("li",{parentName:"ul"},"Compile your keyboard using the \u2714\ufe0f button in the toolbar"),(0,n.kt)("li",{parentName:"ul"},"Flash (upload) your keyboard using the \u27a1\ufe0f button in the toolbar")))}c.isMDXComponent=!0}}]);