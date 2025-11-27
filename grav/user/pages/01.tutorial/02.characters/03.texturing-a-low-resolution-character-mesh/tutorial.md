---
title: Texturing a Low Resolution Character mesh
type: [ RenX, 3dsMax ]
author: Madtone / Läubi
skill: 3
forum_url: https://multiplayerforums.com/topic/156-texturing-a-low-resolution-character-mesh-author-madtone-laubi/
---
  
This Tutorial is split into a **3dsMax part by MadTone** and a **RenX part by Läubi**

## UVW Mapping/UnWrap Tutorial by MadTone:

Mapping a Low Resolution Character mesh.

A brief summary of the steps

1. Editable Mesh - Select sets of polygons and assign an ID number to each set
2. Apply a **Mesh Select** modifier, use it at Sub-Object level to select Polygons by their ID number. Do not turn Sub-Object off.
3. Apply a **UVW Map** modifier to the set of Polygons - Planar Map only.
4. Repeat steps 2 and 3 (apply new Mesh Select, do not try to use the previous one).
5. Apply a **Mesh Select** modifier. Do not turn Sub-Object on.
6. Apply **Unwrap UVW** modifier.
7. Edit (in UVW Unwrap) select one set of face ID's at a time and layout the poly's so that they are separate from each other.
8. Show all ID's
9. Take a screengrab of the UVW Unwrap Edit window.
10. Paint on the screengrab and save as a `.jpg`, `.tif`, or `.tga`.
11. From the Asset Manager, drag and drop the saved painting to the mesh model

### Assigning the Polygon ID numbers

Imagine that your mesh was laid out flat, that`s what the UVW Unwrap modifier does. This tutorial will illustrate how to 
texture the head mesh shown in the following picture:

[![image-50-LPP110.jpg](images/image-50-LPP110.jpg?classes=img-maxsize)](images/image-50-LPP110.jpg)

1. Select the front of the head at Sub-Object Polygon level. Press `F2` to shade the selected faces in red.

    [![image-50-LPP120.jpg](images/image-50-LPP120.jpg?classes=img-maxsize)](images/image-50-LPP120.jpg)
2. Type in number 1 in the Material ID and press enter. Doing this will assign the number 1 to the selected polygons.

    [![image-50-LPP130.jpg](images/image-50-LPP130.jpg?classes=img-maxsize)](images/image-50-LPP130.jpg)
3. Select another set of polygons.

    [![image-50-LPP140.jpg](images/image-50-LPP140.jpg?classes=img-maxsize)](images/image-50-LPP140.jpg)
4. Continue selecting polygons and assigning ID numbers.

### Color Coding the Model

Apply a Multi-Sub Object material to the mesh so that you can see if all of the ID numbers are assigned correctly. This 
material is not used with the final texture, so this is just a temporary material to check where the ID's are. Make sure 
that you turn *Sub-Object* off from the Modify command panel before you do this.

1. Turn *Sub-Object* off in the Modify command panel.
2. Open the Material Editor.
3. Click the Standard button and choose `Multi/Sub-Object` from the list.
4. Choose Keep or Discard the original material. It doesn't matter which, you haven't changed it.
5. Drag and drop the Sample Sphere on to the mesh.
6. Change the color panels at the right of the `Multi/Sub-Object` material. You should see parts of the mesh changing color.
7. Look at your model. If any of the colors are in the wrong place, go back to Editable Mesh Sub-Object level and assign 
those ID`s to the correct numbers.

> **Tip:**
> In Editable Mesh at the Polygon level, click a Polygon and the ID number of that polygon will show up in the Material ID panel.

### Mapping

Mapping a mesh 'pins' vertices of the mesh to positions on a picture. This is similar to a dressmaker laying out a 
pattern onto fabric. In this sequence, you select parts of the mesh and apply mapping to each of the parts.

Do the following for each set of ID numbers that you assigned to the model.

1. Turn off *Sub-Object* for the Editable Mesh.
2. Apply the **Mesh Select** Modifier.
3. Turn on *Sub-Object* and choose Polygon level.
4. Click the *Select by ID* button, polygons with the number that is in the ID panel will become selected.
5. Don`t turn *Sub-Object* off.
6. Apply a UVW Map modifier. Use Planar, you may need to rotate and re-size the UVW Map Gizmo.

Examples:

[![image-50-LPP150.jpg](images/image-50-LPP150.jpg?classes=img-maxsize)](images/image-50-LPP150.jpg)
[![image-50-LPP160.jpg](images/image-50-LPP160.jpg?classes=img-maxsize)](images/image-50-LPP160.jpg)

### UVW Unwrap

1. Apply a **Mesh Select** modifier but don`t turn *Sub-Object* level on. Do this to return the selection level back to 
Object level. (if you look at the last UVW Map in the white panel it has a star next to the name. The star shows that 
the modifier has been applied to a sub part of the mesh.
2. Apply the **Unwrap UVW** Modifier.
3. Click the *Edit* button, then open the Face ID drop down list at the bottom of the dialog.
4. Choose just one number to display the faces with that ID number. The name *Faces* might be confusing, these are 
actually the Polygon ID numbers that you assigned at the beginning of this tutorial. So what you are doing is displaying   
only one set of ID numbers at a time.

    [![image-50-LPP170.jpg](images/image-50-LPP170.jpg?classes=img-maxsize)](images/image-50-LPP170.jpg)
5. This screenshot of Polygon ID numbers shows a problem with some extra vertices at the right of the picture. These are 
faces that weren't assigned the correct number. You will need to find out which number the extra vertices should be 
assigned to, re-assign them and re-map them. Then, you must re-map Polygons number 1 to fix the map.

    [![image-50-LPP180.jpg](images/image-50-LPP180.jpg?classes=img-maxsize)](images/image-50-LPP180.jpg)
6. The above picture is what Polygon ID`s number 1 (on our model) looks like. Scale and Arrange the Sets of faces

    [![image-50-LPP190.jpg](images/image-50-LPP190.jpg?classes=img-maxsize)](images/image-50-LPP190.jpg)

### Screengrab the UVW-Map and Assign the Skin

The next step is do a screengrab and to paint on the grab. Make this dialog as big as possible. Make a screengrab of 
this dialog by pressing the PrtScn button on your keyboard. Alternatively, go to [www.techsmith.com](http://www.techsmith.com/)   
and download the evaluation version of Snagit, a really good screen/window dialog capture program.

You should be able to see which set of polygons are where on your model. If you can, then you can paint on the polygons.

1. Crop the picture so that the dark gray rectangle is the edge of the painting.

    [![image-50-LPP210.gif](images/image-50-LPP210.gif?classes=img-maxsize)](images/image-50-LPP210.gif)
2. Save the picture in your favorite format. Good formats include `.jpg`, `.tif`, and `.tga`.

    [![image-50-SCRGRABBER.jpg](images/image-50-SCRGRABBER.jpg?classes=img-maxsize)](images/image-50-SCRGRABBER.jpg)
3. The next step is simple but important. Open the Asset Manager and find the picture that you painted. Click and drag 
the picture onto the model. The result should show the picture fits perfectly according to the mapping and Polygon ID's 
that you set.

    [![image-50-HEADSHOT.jpg](images/image-50-HEADSHOT.jpg?classes=img-maxsize)](images/image-50-HEADSHOT.jpg)

###Finally

It is recommended, but not essential that you collapse your object back to an Editable Mesh. It is recommended because 
most game engines require the UVW Mapping to be built in to the object. Not many game engines will understand the 
Mesh Select and UVW Mapping if you leave it on an object. The object will retain the mapping that you applied.

To collapse the object click **Edit Stack** in the **Modify** command panel, then choose the **Collapse All** option.