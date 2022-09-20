![image](https://user-images.githubusercontent.com/109235609/191149336-ea7b34b5-a0a6-47af-a503-30aa2df70fab.png)

**SDG 10** calls for reducing inequality within and among countries and strengthening the voice of developing countries in decision-making in global economic and financial institutions.

**Target 10.4:** Adopt policies, especially fiscal, wage and social protection policies, and progressively achieve greater equality

**Indicator 10.4.1**: Labour share of GDP (%)

**Design Prototype**

It will be an interactive data visualization in which typographic approach is used to show the spread of labour in the GDP share of all the countries for the year 2019. 
This data viz will be a transition where each country's name will appear in the percentage contribution box as defined on the axis below. 


![image](https://user-images.githubusercontent.com/109235609/191162183-eeea7d21-acc1-4128-9be6-107121781d2a.png)


A grey scale background is used to distinguish the range of the labour share in GDP and fuchsia colour is used to denote the country name as this SDG is denoted by fuchsia colour.

Observation: Almost 88% of the data points are spread between 40-60%


**Code Prototype**
The data is available from 2004-19, using the filter the use can switch the years and check the GDP share. There is not a significant rise over the course of fifteen years

**Pseudo Code**
1. Data will be imported using the exposed API from https://unstats.un.org/sdgs/dataportal for the indicator 10.4.1.
2. For each row: GeoAreaCode, GeoAreaName, year and its labour share in GDP will be parsed. (See record table tab in the excel)
3. The code will calculate the number of rows and a loop will start until all the data is recorded.
4. Now data will be distributed in ten classes using the following distribution table. (See pivot tab in the excel)

![image](https://user-images.githubusercontent.com/109235609/191152978-b9b763ea-78eb-411b-83bf-9b8e6a651b93.png)

5. Data will be segregated on the basis of the classes and and make a table from which it will fetch the GeoAreaName to be shown on the viz.
6. These data points will be pulled by
the viz. showing the GeoAreaName on the screen for 5 seconds and will change their position each time.

Refer to excel for explanation:  [SL_EMP_GTOTL Data.xlsx](https://github.com/asadahmadk/asadahmadk/files/9603517/SL_EMP_GTOTL.Data.xlsx)
