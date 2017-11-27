# dpi
[密度单位](dots per inch)打印分辨率 （每英寸所能打印的点数，即打印精度）[主要用于打印设备]
# ppi
[密度单位](pixels per inch)[每英寸像素点数]图像分辨率 （在图像中，每英寸所包含的像素数目）
#### 计算方法：
```
# √(长度像素数² + 宽度像素数²)/屏幕对角线英寸数

# iphone5的ppi计算：
Math.sqrt(Math.pow(1136,2)+Math.pow(640,2))/4=326

# iphone6的ppi计算
Math.sqrt(Math.pow(1334,2)+Math.pow(750,2))/4.7=326

# iphone6+的ppi计算
Math.sqrt(Math.pow(1920,2)+Math.pow(1080,2))/5.5=400
```
#### 备注
|                      |        |                                    | 英寸 |     | ppi | dpi |
|----------------------|:--------:|------------------------------------|:------:|:-----:|:-----:|:---:|
| iphone6+             | retina | 1920 x 1080[2208 x 1242]/414 x 736 | 5.5  | @3x | 401 | 154 |
| iphone6              | retina | 1334 x 750/375 x 667               | 4.7  | @2x | 326 | 163 |
| iphone5              | retina | 1136 x 640/320 x 568               | 4    | --  | --  |  -- |
| iphone5s             | retina | 1136 x 640                         | --   | --  | --  |  -- |
| iphone5c             | retina | 1136 x 640                         | --   | --  | --  |  -- |
| iphone4              | retina | 960 x 640/320 x 480                | 3.5  | --  | --  |  -- |
| iphone4s             | retina | 960 x 640                          | --   | --  | --  |  -- |
| iphone1              |        | 780 x 320/320 x 480                | --   |     | 163 | 163 |
| iphone2              |        | 780 x 320                          | --   |     | --  |  -- |
| iphone3              |        | 780 x 320                          | --   |     | --  |  -- |
| iPad Air/Retina iPad | retina | 2048 x 1536                        |      |     |     |     |
| iPad 1/iPad 2        |        | 1024 x 768                         |      |     |     |     |
# dp
[也叫dip][安卓开发单位]，device independent pixels(设备独立像素)
# px
[电子屏幕基本单位]主要使用的photoshop或者axure等工具用的度量单位像素，电子屏幕上组成一幅图画或照片的最基本单元。dp与px之间的换算关系[1dp表示在屏幕像素点密度为160ppi时1px长度]
```
dp*ppi/160 = px
1dp=(屏幕ppi/ 160)px
```
# sp
[安卓字体单位]scaled pixels(放大像素). 主要用于字体显示best for textsize
```
# 当文字尺寸是“正常”时1sp=1dp，而当文字尺寸是“大”或“超大”时
1sp>1dp
```
由于做设计时以xhdpi为模板，xhdpi条件下，1dp=2px。若新建画布时，将画布分辨率设为144ppi，则1pt=2px=1dp。此时，即可将pt等同于dp。标注长度的时候，将长度像素除以2即为dp值。
# sp与px之间的换算关系
```
sp*ppi/160 = px
```
sp和dp代替px[在Android设计原则中,他们不会因为ppi的变化而变化，在相同物理尺寸和不同ppi下，他们呈现的高度大小是相同。也就是说更接近物理呈现，而px则不行]
# pt
[印刷基本单位]是一个标准的长度单位，1pt=1/72英寸，用于印刷业，非常简单易用
```
1pt= (DPI / 72) px
```
eg:当photoshop中新建画布的分辨率为72ppi( 即 72dpi时 )， 1pt=1px; 当新建画布分辨率为72*2=144ppi时，1pt=2px
# in
window.devicePixelRatio[设备像素比]=设备物理像素/设备独立像素    我的iPhone是3







