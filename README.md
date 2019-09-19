## App - Radio Terra play

## Tecnologias
   - React Native
   - Axios

## Dependências configurações extras.
   - react-native-vectors
     add (apply from: "../../node_modules/react-native-vector-icons/fonts.gradle") | Patch (android/app/build.gradle)
     add (
         	<key>UIAppFonts</key>
	        <array>
		       <string>AntDesign.ttf</string>
		       <string>Entypo.ttf</string>
		       <string>EvilIcons.ttf</string>
		       <string>Feather.ttf</string>
		       <string>FontAwesome.ttf</string>
		       <string>FontAwesome5_Brands.ttf</string>
		       <string>FontAwesome5_Regular.ttf</string>
		       <string>FontAwesome5_Solid.ttf</string>
		       <string>Foundation.ttf</string>
		       <string>Ionicons.ttf</string>
		       <string>MaterialCommunityIcons.ttf</string>
		       <string>MaterialIcons.ttf</string>
		       <string>Octicons.ttf</string>
		       <string>SimpleLineIcons.ttf</string>
		    <string>Zocial.ttf</string>
	        </array>
        ) | Patch (ios/mbtvapp/Info.plist)