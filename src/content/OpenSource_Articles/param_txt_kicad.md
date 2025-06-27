In many PCB designs, adding custom text to the silkscreen layer is a common requirement such as marking the project title, version number, or board version. But what if this information changes frequently, or appears in multiple places across your design?

Manually updating every text label can quickly become tedious. And if you use tools like Kibuzzard to generate text as footprints, these can get deleted during an "Update from Schematic" if "Delete footprints with no symbols" is enabled.

**Solution**: Use parametrized silkscreen text with non-electrical symbols and text variables. This way, your text becomes dynamic and automatically updates with the project settings. </br>

**What You'll Learn**:

In this tutorial, we’ll walk through how to: </br>
     - Create a text variable in your KiCad project.</br>
     - Design a non-electrical symbol that links to this variable. </br>
     - Associate a custom footprint to display the text on the silkscreen layer.

1️⃣ **Create a Text Variable**

KiCad allows the use of custom text variables that can be reused across your project.</br>
🔧 **Steps**:</br>
    - Open your KiCad Project.</br>
    - Either go to Schematic or PCB editor </br>
    - On Schematic Editor (or PCB Editor) </br>
    - Go to Menubar click on Schematic setup (Board setup) on the Text & Graphics click on Text Variables.</br></br>
    ![Schematic Setup](/images/OpenSource_Articles/param_txt_kicad/schematic_setup.PNG) </br>
    ![Board Setup](/images/OpenSource_Articles/param_txt_kicad/pcbeditor_setup.PNG) </br>
    - Click Add and define a new variable: </br></br>
    ![Board Setup](/images/OpenSource_Articles/param_txt_kicad/schematic_text_variables.PNG) </br>
    - Variable Name: **version** </br>
    - Text Substitution: **1.3** </br>
    - Click **OK** to save. </br>

📌 You can now use **${version}** anywhere in your project to refer to this value. </br></br>
2️⃣ **Create a Symbol to Hold the Text**

Next, we’ll create a dummy symbol that contains our text variable, so we can place it in the schematic and preserve the link during updates. </br>
🔧 **Steps**:</br>
    - Open **Symbol Editor** (Tools > Symbol Editor).</br></br>
    ![Symbol Editor](/images/OpenSource_Articles/param_txt_kicad/symbol_editor.PNG) </br>
        - Create New Library or Add an existing one:</br></br>
    ![New Library](/images/OpenSource_Articles/param_txt_kicad/new_library.PNG) </br>
        - Choose Global or Project:</br>
        - Name the symbol library: e.g. **Text_Label**.kicad_sym</br>
        - Click on **New Symbol**</br></br>
     ![New symbol](/images/OpenSource_Articles/param_txt_kicad/new_symbol.PNG) </br>
        - Name it, for example **text_label**</br>
        - Give a reference designator, for example **txt**</br>
        - On the Menubar, click **Symbol properties**:</br></br>
    ![Symbol properties](/images/OpenSource_Articles/param_txt_kicad/library_symbol_properties.PNG) </br>
        - Set the properties the value is not important at this stage.</br>
        - Exclude from simulation (optional)</br>
        - Exclude from Bill of materials (better to not have a dummy component in the list)</br>
        - Save the symbol (keep the Symbol Editor opened)
   
📌 This symbol acts purely as a label and won’t affect electrical functionality.</br></br>
3️⃣ **Create a Footprint for the Silkscreen**

Finally, we’ll associate the symbol with a footprint that displays the text on the PCB silkscreen.</br>
🔧 Steps:</br>
    - Open Footprint Editor.</br></br>
    ![Open Footprint Editor](/images/OpenSource_Articles/param_txt_kicad/footprint_editor.PNG) </br></br>
    - Create New Library or Add an existing one:</br></br>
    ![New library Footprint Editor](/images/OpenSource_Articles/param_txt_kicad/new_library_fpeditor.PNG) </br>
    - Choose Global or Project:</br>
    - Name the footprint library: e.g. **text_label**.pretty</br>
    - Click on **New Footprint** (File>New Footprint) </br></br>
    ![New Footprint](/images/OpenSource_Articles/param_txt_kicad/save_footprint_as.PNG) </br>
    - Name it, for example **txt_label** in the library just created (**text_label**.pretty)</br>
    - Here you may want to personalize the **Fotprint Value Properties** (such as font, size, alignement, knockout, etc.)</br>
    - Most important is to set the layer (**F.Silkscreen** or **B.Silkscreen**) </br></br>
    ![Footprint Value Properties](/images/OpenSource_Articles/param_txt_kicad/footprint_value_properties.PNG) </br>
    - Save the footprint.</br>

🔄 **Link Symbol to Footprint** </br></br>
    Go back to the Symbol Editor and assign the new footprint to the Text_Label symbol.</br>
    - Open the dialog box **Symbol Properties**</br></br>
    ![Footprint Assignment](/images/OpenSource_Articles/param_txt_kicad/symbol_editor_footprint_assignment.PNG) </br>
    - set the footprint as the one created **text_label:txt_label**</br>
    - Save all changes and return to the schematic.</br>
    - Place the symbol **text_label** where needed.</br>
    - Set its value as **${version}**.</br>
    - Run "Update PCB from Schematic" to sync the board.</br>

🎉 Now your board will automatically display the version number in silkscreen—dynamically controlled from a central variable!</br>
⬇️ [Text Label Download example](https://github.com/dd-solve/KiCad_Libraries/tree/main/Text%20Label)

