PCBs are rarely, if ever, standalone elements. They are typically integrated with mechanical constraints and non-electrical components such as screws, chassis, and optical equipment. It's a good practice to include these components in your design: in the BOM (Bill of Materials), in the schematic for reference, and as footprints in the PCB layout to help prevent collisions with other components or traces. Including them in the 3D preview also gives you a better sense of how the final product will look. In this KiCad tutorial, we’ll learn how to manage these components in an organized and efficient way.

**Solution**
To properly account for non-electrical components in your PCB design, create dedicated symbols and associate them with custom footprints that include embedded 3D models. These elements should be placed on non-copper layers (e.g., user drawing layers) to ensure they don’t interfere with the electrical design. This approach ensures your mechanical components are considered at every stage—BOM, PCB layout, and 3D visualization.

**What You’ll Learn**

In this tutorial, you’ll learn how to:</br>
    - Design a non-electrical symbol that represents a mechanical component</br>
    - Link that symbol to a custom footprint with an associated 3D model</br>
    - Place the footprint on a non-electrical layer (such as the user drawing layer) for clear separation from copper elements</br>

1️⃣ **Create a Symbol to Hold the Text**

Next, we’ll create a symbol that contains our mechanical object, so we can place it in the schematic and keep it for a complete BOM. For this example we'll be using the [CP35/M](https://www.thorlabs.com/thorproduct.cfm?partnumber=CP35/M) an optical cage plate</br>
🔧 **Steps**:</br>
    - Open **Symbol Editor** (Tools > Symbol Editor).</br></br>
    ![Open Symbol Editor](/images/OpenSource_Articles/non_electrical_components_kicad/symbol_editor.PNG) </br>
        - Create New Library or Add an existing one:</br></br>
    ![New Library](/images/OpenSource_Articles/non_electrical_components_kicad/new_library.PNG) </br>
        - Choose Global or Project:</br>
        - Name the symbol library: e.g. **Optical_Components**.kicad_sym</br>
        - Click on **New Symbol**</br></br>
    ![New symbol](/images/OpenSource_Articles/non_electrical_components_kicad/new_symbol.PNG) </br>
        - Name it **CP35M**</br>
        - Give a reference designator, for example **mech**</br></br>
    ![Symbol Editor](/images/OpenSource_Articles/non_electrical_components_kicad/symbol_editor_2.PNG) </br>
        - On the Menubar, click **Symbol properties**:</br></br>
    ![Symbol properties](/images/OpenSource_Articles/non_electrical_components_kicad/CP35M_symbol_properties_1.PNG) </br>
        - Set the properties the value is not important at this stage.</br>
        - Exclude from simulation (optional)</br>
        - If possible place the link for the datasheet</br>
        - Put a brief description </br>
        - Create a new field for example named **Link** and paste the web link of the component (this will help the BOM)</br>
        - Save the symbol (keep the Symbol Editor opened)
   
📌 This symbol acts purely as a placeholder and won’t affect electrical functionality.</br></br>
2️⃣ **Create a Footprint**</br>
🔧 Steps:</br>
    - Open Footprint Editor.</br></br>
    ![Open Footprint Editor](/images/OpenSource_Articles/non_electrical_components_kicad/footprint_editor.PNG) </br></br>
    - Create New Library or Add an existing one:</br></br>
    ![New library Footprint Editor](/images/OpenSource_Articles/non_electrical_components_kicad/new_library_fpeditor.PNG) </br>
    - Choose Global or Project:</br>
    - Name the footprint library: e.g. **Optiomechanics**.pretty</br>
    - Click on **New Footprint** (File>New Footprint) </br></br>
    ![New Footprint](/images/OpenSource_Articles/non_electrical_components_kicad/save_footprint_as.PNG) </br>
    - Name it, for example **CP35M** in the library just created (**Optomechanics**.pretty)</br>
    - Go to File>Import>Graphics and choose your DXF file, I chose the **User.Drawings** layer</br></br>
    ![Import Graphics](/images/OpenSource_Articles/non_electrical_components_kicad/import_DXF.PNG) </br>
    - Here you may want to clean up the DXF and center it</br></br>
    ![Imported DXF](/images/OpenSource_Articles/non_electrical_components_kicad/imported_DXF.PNG) </br>
    - Go to the menubar and click on **Footprint Properties**</br></br>
    ![Footprint Properties General](/images/OpenSource_Articles/non_electrical_components_kicad/footprint_prop_general.PNG) </br>
    - You may want to set the link to the datasheet, write down a brief description, place the link to the step file and to the website (all optional) </br>
    - Component Type **Unspecified**</br>
    - **Exclude from position files** </br>
    - **Do not populate** </br>
    - Go to the tab **3D Models**</br></br>
    ![Footprint Properties 3D](/images/OpenSource_Articles/non_electrical_components_kicad/footprint_prop_3D.PNG) </br>
    - Click on the **"+"** sign to include a new path and search for your .step file</br>
    - Make sure the option **Show** on the right is **checked**</br>
    - Click **OK**</br>
    - Save the footprint.</br>

🔄 **Link Symbol to Footprint** </br></br>
    Go back to the Symbol Editor and assign the new footprint to the CP35M symbol.</br>
    - Open the dialog box **Symbol Properties**</br>
    - Go to the footprint row and search for the created footprint</br></br>
    ![Footprint Assignment](/images/OpenSource_Articles/non_electrical_components_kicad/CP35M_symbol_properties_2.PNG) </br>
    ![Footprint Assignment](/images/OpenSource_Articles/non_electrical_components_kicad/footprint_chooser.PNG) </br>
    - Save the symbol and place it into your design</br>
🎉 - Your BOM will contain the information about the part</br>
🎉 - The board will display on the **User.Drawings** layer the DXF of your mechanical component</br>
🎉 - The 3D model will be complete! </br>
⬇️ [Optical Components library download](https://github.com/dd-solve/KiCad_Libraries/tree/main/Optical%20Components)