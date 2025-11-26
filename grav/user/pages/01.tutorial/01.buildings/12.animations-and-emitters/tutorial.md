---
title: Animations And Emitters
summary: Explains how to make an aggregate and put emitters on it
author: Bumpaneer
type: [ RenX, LevelEdit ]
skill: 4
forum_url: https://multiplayerforums.com/topic/150-animations-and-emitters-author-bumpaneer/
---

Ok, here is how to make an aggregate and put emitters on it. StoneRook and I (Bumpaneer) have been working on this for a
long while, so if you have any questions you know where to direct them. First off you need a building. Here is mine.

[![step1](images/step1.jpg?classes=img-maxsize)](images/step1.jpg)

The building must be centered at `0,0,0`. Then create a box (`1,1,1`) and center it at `0,0,0`. The name of your box will be
the call to your aggregate. I used `mghel_ag_1~` for mine. The `~` at the end of the file name is critical. When you have
all this, export it as terrain.

Next start a new project, this will contain all the changing parts of your building. (Places where smoke will pop up,
damaged tiles, etc). Here is mine for the chopper pad.

[![step2](images/step2.jpg?classes=img-maxsize)](images/step2.jpg)

The triangles are two sets of lights, layered on top of each other. One set blinks and one set does not (for when the
building is destroyed). Here is how to animate them so only one set shows up at a time. After both are created go to the
**Open Track View** button.

[![step5](images/step5.jpg?classes=img-maxsize)](images/step5.jpg)

Open up the objects tab and find the object you want to animate. Select it and click the **Add Visibility Track** option.
You should now have an option labeled **Visibility** under your object name. Click the **Add Keys** button and choose a frame to
start. You can right click on the key to change its value (`1.0` for fully visible `0` for invisible). Here is what the
setup should look like.

[![step6](images/step6.jpg?classes=img-maxsize)](images/step6.jpg)

You've probably noticed that semi-visible box by now. That is used for any place you want to have an emitter, such as smoke. 
It is a `1x1x1` box that has a **Visibility** track. When it is visible you can see the smoke, when it is not, you can't. 
The box has the aggregate box and hide checked under the w3d options. Once everything is all set up you are ready to
export. When you export choose **Hierarchical Animated Model**. Make sure you _DON'T_ name it what you told your building to
look for (ex. `mghel_ag_1` is WRONG for me). I just called mine `testing`. After all this is done we are done with RenX, so
you can close it down.

The easiest way to add an emitter is to use one Westwood already created. I extracted `e_19_smoke2.w3d` from `always.dat`.
Now open up your exported animation in W3d Viewer (`testing.w3d` for me). The go to `File->Open` and open the emitter
aggregate you want to use (`e_19_smoke2.w3d`) OR create your own emitter. I am not going to go through how to do that now,
read the Westwood tutorials. Under the **Hierarchy** tab, choose your model (`TESTING` for me) and go to the **Hierarchy** menu at
the top. Choose **Make Aggregate...** and give it a name. The name you put here is the name you told your building to look
for (ie. `mghel_ag_1` for me). Your side menu should look something like this.

[![step3](images/step3.jpg?classes=img-maxsize)](images/step3.jpg)
[![step4](images/step4.jpg?classes=img-maxsize)](images/step4.jpg)

Click on the object name under the **Aggregate** tab (`mghel_ag_1`) and go to the aggregate menu. Choose the **Bone Management**
option and click on the bone (or other object) you want to attach the emitter to. Find the emitter you want to attach in
the Render object: dropdown box and click the attach button. After all that is set use the **Export Aggregate** button to
export it.

You'll need both `.w3d` files in your mod folder for Level Edit (ie `testing.w3d` and `mghel_ag_1.w3d`). In Level Edit create
a new terrain object for your building exterior. Then create a new tile for your buildings aggregate. Point it to the
aggregate you exported from W3D Viewer (`mghel_ag_1`). Set the physics type to `BuildingAggregate` and the **AnimationMode** to
`MANUAL`. In the **AnimationName** box type the name of your animation (it comes from the original file so mine is
`testing.testing`.).

Set what frames to display at what damage points farther down. And that should do it for you. Good Luck.

~Bumpaneer