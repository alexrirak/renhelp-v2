---
title: Character Bone Rigging
summary: Ever wondered how to make your own characters? Here you will find help.
type: [ RenX ]
author: Läubi
skill: 3
forum_url: https://multiplayerforums.com/topic/158-character-bone-rigging-author-laubi/
---

1. **First we need our Character, here you can see the Umagon from Reborn**

[![image-60-INDEX.2.jpg](images/image-60-INDEX.2.jpg?classes=img-maxsize)](images/image-60-INDEX.2.jpg)

2. **Then we need the Skeleton,** depending on what Charactertype we have, import either the male or the female character 

[![image-60-INDEX.3.jpg](images/image-60-INDEX.3.jpg?classes=img-maxsize)](images/image-60-INDEX.3.jpg)
    
(You find them in the folder of the Renegade Public Tools under `Characters\(fe)male\` select the skeleton and a screen similar to this should came up )

[![image-60-INDEX.4.jpg](images/image-60-INDEX.4.jpg?classes=img-maxsize)](images/image-60-INDEX.4.jpg)
    
Select ALL and press ok.

3. **Now we need to align and resize the character,** because in most cases it will look like this: 

[![image-60-INDEX.5.jpg](images/image-60-INDEX.5.jpg?classes=img-maxsize)](images/image-60-INDEX.5.jpg)
    
To make your life easier you should hide all `K_ bones` and the old mesh, also the wordlboxes

[![image-60-INDEX.6.jpg](images/image-60-INDEX.6.jpg?classes=img-maxsize)](images/image-60-INDEX.6.jpg)
    
**Try to align the character as close as possible to fit the bones!!**

[![image-60-INDEX.7.jpg](images/image-60-INDEX.7.jpg?classes=img-maxsize)](images/image-60-INDEX.7.jpg)

4. **Tweak up the base position,** so the character fits the bones. 

As you saw on the previous screenshot the arms and the feets/legs don't fit that good, so we need to align them, so hope that the creator of the model has already designed the model to fit, otherwise you`ll have a lot of fun now align it properly
    
**Its is very important that you align it as close as possible, that will later make your life a lot easier and will reduce the amount of animation errors you later might get!**

[![image-60-INDEX.8.jpg](images/image-60-INDEX.8.jpg?classes=img-maxsize)](images/image-60-INDEX.8.jpg)

[![image-60-INDEX.9.jpg](images/image-60-INDEX.9.jpg?classes=img-maxsize)](images/image-60-INDEX.9.jpg)
    
Now it fits the bones a lot better

[![image-60-INDEX.10.jpg](images/image-60-INDEX.10.jpg?classes=img-maxsize)](images/image-60-INDEX.10.jpg)

5. **Unhide all parts,** delete the merged Head and body mesh, the female file also contains a camera object that you can delete as its not needed. If you have not done it yet, save your work into a new file

6. Now we will Link the Mesh to the `WWSkin` (thats the small CrossBone) by selecting  

[![image-60-INDEX.11.jpg](images/image-60-INDEX.11.jpg?classes=img-maxsize)](images/image-60-INDEX.11.jpg)
    
and the click on the mesh ad drag to the `WWSkin`:

[![image-60-INDEX.12.jpg](images/image-60-INDEX.12.jpg?classes=img-maxsize)](images/image-60-INDEX.12.jpg)
    
Now the model has the `WWSkin Binding` Modifier applied we will now use this to bind the vertices to the bones:

[![image-60-INDEX.13.jpg](images/image-60-INDEX.13.jpg?classes=img-maxsize)](images/image-60-INDEX.13.jpg)
    
Select all Vertices and press on the **Auto-Link** Button

[![image-60-INDEX.14.jpg](images/image-60-INDEX.14.jpg?classes=img-maxsize)](images/image-60-INDEX.14.jpg)
    
**Congratulation, the smart part is done now**

7. **Time for fixing errors,** or did you think it is THAT easy??? 
For better working on the next steps you can again hide all the `K_Bones` the Worldbox, the select all the `c_bones` and activate the "**Display as box**" option

[![image-60-INDEX.15.jpg](images/image-60-INDEX.15.jpg?classes=img-maxsize)](images/image-60-INDEX.15.jpg)
    
Now move the animation slider to frame 1, you will notice that your Character moves.

[![image-60-INDEX.16.jpg](images/image-60-INDEX.16.jpg?classes=img-maxsize)](images/image-60-INDEX.16.jpg)
    
Move through the different frames and watch out for anny misaligned faces.

[![image-60-INDEX.18.jpg](images/image-60-INDEX.18.jpg?classes=img-maxsize)](images/image-60-INDEX.18.jpg)
    
Select the Bone the faces "should" be aligned to here it is the right tight bone, write it down, or remember it, and select the misaligned faces, and click on the **Link to bone by Name**

[![image-60-INDEX.19.jpg](images/image-60-INDEX.19.jpg?classes=img-maxsize)](images/image-60-INDEX.19.jpg)
    
Find and select the bone the faces belong to:

[![image-60-INDEX.20.jpg](images/image-60-INDEX.20.jpg?classes=img-maxsize)](images/image-60-INDEX.20.jpg)
    
Press **Ok** and your faces are aligned right, well done

[![image-60-INDEX.21.jpg](images/image-60-INDEX.21.jpg?classes=img-maxsize)](images/image-60-INDEX.21.jpg)
    
**Repeat these steps until all faces are aligned right**

8. **Export your final result**

Export it with following Settings:

**Female Character:**

[![image-60-INDEX.22.jpg](images/image-60-INDEX.22.jpg?classes=img-maxsize)](images/image-60-INDEX.22.jpg)

**Male Character:**

[![image-60-INDEX.23.jpg](images/image-60-INDEX.23.jpg?classes=img-maxsize)](images/image-60-INDEX.23.jpg)

**You find the needed Skeleton Files in the corresponding folder from where you have merged the skeleton file.**
    
Now you can test the Character In-Game and see if there are any other problems you might need to fix, have fun on your hard way