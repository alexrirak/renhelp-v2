---
title: Advanced Building Tutorial
summary: A Step by Step to create a full functional building like the Westwood ones.
type: [RenX, LevelEdit]
author: Läubi
skill: 3
---
**![renx_ico.gif](http://renhelp.multiplayerforums.com/Images/renx_ico.gif) RenX / ![le_ico.gif](http://renhelp.multiplayerforums.com/Images/le_ico.gif) Leveledit**

**Make your own Building:**

a Step by Step to create a full functional building like the Westwood ones.  
  
**Important!! Read this tutorial carefully.   
If something didn`t work as you have expected it, check the coresponding part of the tutorial if you have not miss a thing.**

1. First of all, of course you need you building. I used for this tutorial is the Atreides Weapon factory for the Battle for Dune Mod  
    ![image-42-01_GEB.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-01_GEB.JPG)  
      
    It is important that you move your whole building to the center of RenX.  
     You also should already have setup all collision settings.
2. Now select all the meshes that are part of the **EXTERIOR**. This should be all parts of the exterior of the bulding, excluding any emitters, animations or doors.  
    ![image-42-02_EXTMESH.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-02_EXTMESH.JPG)  
      
     Then goto the W3D-Tools --&gt; Assign Node Names:  
    ![image-42-03_ASINGNAMES.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-03_ASINGNAMES.JPG)  
      
     In the following dialog uncheck/check the Options you see on the screen below, enter at the **Root Name:** entry a short name, e.g. atrwep (atreides weponfactory) followed by a ^.  
     You should write this down. because youll need that later, I`ll refer to this name as the **Meshprefix** later.  
    **The Meshprefix should NOT exceed 6 characters.**  
    ![image-42-04_ROOTNAMES.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-04_ROOTNAMES.JPG)
3. Congratulation you have now created a buildings exterior. Now goto Group --&gt; Group and enter a name (e.g. wep\\_ext)  
    ![image-42-05_GROUP.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-05_GROUP.JPG)
4. Now hide your ExteriorGroup and unhide all parts of the interior, again excluding any emitters, animations or doors.  
    ![image-42-06_INT.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-06_INT.JPG)  
      
     Again select all meshes and open the same dialog as for the interior. Enter the Meshprefix followed by a #.  
    ![image-42-07_INT_2.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-07_INT_2.JPG)  
      
     Again Group this and name it for example wep\\_int:  
    ![image-42-08_GROUP_INT.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-08_GROUP_INT.JPG)
5. Now we will add the doors, emitters as well as animate them for the later use.  
    **If you have already done this, you can just skip this part.**  
     For the doors I`ll use the standard Rengade MP ones, but of course you can make your own ones.
6. As you can see, I have unhidden the Ext/Int-Group to better align things. For the doors you need the name of the preset of the door, the standard Rengade doors name is `mpdr\\_0` create a box 1x1x1 at the topview, and place it at the location where the door should be placed, name the box : mpdr\\_0~ (or the name your door-preset has in Leveledit + a ~ ) add a 00 after the ~ for the first, a 01 for the second and so on.  
    When you have placed all doors, group the doors e.g. as wep\\_doors.  
      
    ![image-42-09_DOORS.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-09_DOORS.JPG)  
      
      
    **When you are done with the doors,** you need some damage emitters. You can make your own with W3D-Editor or use Renegade ones, extract them with XCC\\_Mixer you can identify them by the leading e\\_ (e.g.[e\\_19fire1.w3d](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/Tutorials/TUT_blding__/e_19_fire1.w3d)). For all Emitters you should extract (or download) the [e\\_master01.tga](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/Tutorials/TUT_blding__/e_master01.zip) so you can see the emitter effects:  
    ![image-42-10_EMITTER.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-10_EMITTER.JPG)  
      
    **Now create three boxes (1x1x1) named:** emitter0, emitter25, emitter50, emitter75. I will refer to this as the `DamageBox`.  
     After that, create 1x1x1 boxes named like the emitter file (without the w3d) that should be displayed later, in this case e\\_fire1. I will refer to this as `EmitterBox`.  
    **IMPORTANT:** Never just rename the emitter file!! You must edit the name in w3d-Viewer and re-export it or the file will not be loaded or even crash Renegade!!!  
     Now link the EmitterBox to the DamageBox emitter75 if this emitter should be showed up at the state for when the building is 25% damaged, emitter50 for half damged, emitter25 when the bulding is damaged by 75% and emitter0 when the building is detroyed.  
      
     For this use the Link tool   
    ![image-42-11_LINK.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-11_LINK.JPG) ![image-42-12_DRAG.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-12_DRAG.JPG)  
     and klick and drag from your EmitterBox to your DamageBox (The damage box will flash for about 2 sek when this is done succesfull.  
      
    **Then place all around your building emitters** or objects that should be displayed at the different states and link them to the coresponding DamageBox.  
     I recommend to save your work now if you have not done this before!!
7. **Now we must make an animation, so Renegade later know what parts must be showed at the damage states.**  
     For that you should reopen RenX, because the `Trackview` that we will need often conflicts with the RenegadeMaterialEditor for Gmax, restarting RenX solves the problem.  
     Open now the `Trackview`: ![image-42-13_TRACKVIEW.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-13_TRACKVIEW.JPG)  
    **On the Trackview browse to Objects --&gt; emitter75:**  
    ![image-42-14_TW2.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-14_TW2.JPG)  
    **Add a visibility track** by clicking the eye icon ![image-42-15_EYE.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-15_EYE.JPG) that will add a new option to your Object:  
    ![image-42-16_VISIBLTRACK.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-16_VISIBLTRACK.JPG)  
     Click on the new option and add via the ![image-42-17_ADDKEYS.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-17_ADDKEYS.JPG) at frame 1, 2 and 3 a new key.  
      
    ![image-42-18_ADDKEYS.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-18_ADDKEYS.JPG)  
      
     Rightklick the first key and change the value to 0 (invisible)  
    ![image-42-19_KEYOPTION.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-19_KEYOPTION.JPG)  
      
     Now change this also for key2. The trird key must not be changed and should stay at value 1 (visible)  
      
    Repeat this process for all other DamageBoxes, but switch the keys to the following:When you have done this, group all DamgeBoxed and the EmitterBoxes e.G wep\\_emitter
    
    
    - emitter50 frame 1,4,5
    - emitter25 frame 1,6,7
    - emitter0 frame 1,8,9
    - **Now we will prepare the PT and the MCT** (This is optional)  
         Your PT`s and MCT can have also animations like the damage emitters. For the PT`s you might want to add animations for a powerless building like westwood does. for thsi jsut create four more emitter boxes( emitter0p, emitter25p and so on) and count up the last frame by one for each state liek you have seen in Section 6.  
          
         Select all MCT Meshes and use the naming tool that is described in Section 2, and use as a basename the meshprefix#mct (e.g. atrwep#mct). repeat this for the PT`s also but use meshprefix#pt here (e.g. atrwep#pt)  
         Group all your PT`s and the MCT to a seperate group, e.g. wep\\_pct and wep\\_mct
    - **Exporting time.**  
         Now you must export all parts for the use in Leveledit.  
          
        Export:  
         \\* the Interior Group as mesprefix\\_int (Renegade Terrain)  
         \\* the Doors Group as meshprefix\\_doors (Renegade Terrain)  
         \\* the Damage and Emitter as meshprefix\\_dam (Hirachy Animated Model)  
         \\* The MCT Group as meshprefix\\_mct (Hirachy Animated Model)  
         \\* The PT Group as meshprefix\\_pt (Hirachy Animated Model)  
          
         In my example I`ll get 5 files: atrwep\\_int.w3d, atrwep\\_doors.w3d, atrwep\\_dam.w3d, atrwep\\_mct.w3d, atrwep\\_pt.w3d  
        ![image-42-20_W3DS.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-20_W3DS.JPG)  
         Copy all these files into Your modfolder if you have not done this already, a seperate folder e. g. buildingparts would be a nice idea.  
        ![image-42-21_FOLD.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-21_FOLD.JPG)
    - **Setup your exterior mesh for use in Maps.**  
         You might wonder what will happen to the exterior mesh. We must jsut setup some very simple parts to finish this:  
         create a box from the TOPVIEW (1x1x1) in the EXACT center of Gmax/Renx. Name this box meshprefix\\_int~, then clone the box (or create a new one) and name it meshprefix\\_doors~ and so on for all w3d`s you have exportet in part 8. then select all these boxes and activate the \\[x\\] Hide and \\[x\\]Aggregate w3d option.  
        ![image-42-23_W3D.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-23_W3D.JPG)  
          
         After that select your ExteriorMesh and these Boxes and group them to for example AtreidesWeponfactory and save your work.  
         You can now Merge this Group into your map(s) like the orginal westwood buildings.
    - **Setup everything in Leveledit.**  
         Now start the Leveleditor and Load your Modpackage.  
          
         Goto Terrain--&gt;Add and enter a name, e.g. mybuildings  
        ![image-42-24_LEADGROUPT.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-24_LEADGROUPT.JPG)  
          
         Select this new group and press again add. Enter as name meshprefix\\_doors (e.g. atrwep\\_doors) and under the settings tab under m\\_Modelname select your \\_doors w3d file.  
        ![image-42-25_W3DSEL.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-25_W3DSEL.JPG)  
         Repeat this part also for the mesprefix\\_int w3d file, you`ll then has 2 new entry`s:  
        ![image-42-26_GROUP.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-26_GROUP.JPG)  
          
         Now change to the Tiles Tab and again press add create a new entry named: mybuildingtiles under the Physics Type select BuildingAggregate.  
        ![image-42-27_BLDAGTILES.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-27_BLDAGTILES.JPG)  
          
         Select this new group and once again press add, enter as name: meshprefix\\_dam, under the Physics Model be sure that the type is Building Aggregate, change the Model Name to your coresponding w3d file, the AnimationMode to Manual  
        ![image-42-28_SETUP_DAM.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-28_SETUP_DAM.JPG)  
          
         Scroll down to the Building Behavior Settings and change the AnimLogicMode to ANIM\\_LOGIC\\_SEQUENCE.  
         The Buidling state for 75% to 1, 1 as showed below, for 50% 2,2 for 25% 3,3 for detroyed 4,4.  
         Repeat this also for the State: Power OFF.  
        ![image-42-29_SETUP2.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-29_SETUP2.JPG)  
          
         After that press OK, again use the add, now enter as name: meshprefix\\_mct (e.g atrwep\\_mct), select the needed w3d, setup everything like before, but check the checkbox labled \\[x\\] IsMCT.  
         If your MCT also has animation sequences, you must set them up coresponding to your animation as described above.  
        ![image-42-30_MCT.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-30_MCT.JPG)  
          
         Again add another tile, name it meshprefix\\_pt, set it up as explained for the MCT, but let the \\[ \\] IsMCT uncheked.  
          
         Now you have three new entrys in your mybuldingstiles group:  
        ![image-42-31_FINALY.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-31_FINALY.JPG)
    - **Congratulations!!!**  
         You are finished now. Add your Building Group you have created in part 9 to your map via the MERGE command in RenX/Gmax, export it as Renegade Terrain and enjoy your bulding.
    - **One Last Step:**  
         To make your building work ingame you have to Clone wia the ADD button one of the Buildingcontrollers, for example mine is a Weponsfactory, so I clone the GDI\\_Weponsfactory:  
        ![image-42-32_CLONE.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-32_CLONE.JPG)  
          
         You can name it whatever you want.... but you must fill in the MESHPREFIX into the coresponding field:  
        ![image-42-33_MESHPREFIX.JPG](http://renhelp.multiplayerforums.com/Images/Buildings/Adv_Building_Tut/image-42-33_MESHPREFIX.JPG)  
          
         Of course you can edit other settings like health in this dialog too,play around abit with these settings
    - **Have Fun by detroy all your hard work ingame**