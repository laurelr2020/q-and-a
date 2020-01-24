"use strict"


class Presidents{
    
    constructor(){
        //data is from: https://en.wikipedia.org/wiki/United_States_presidential_inauguration#List_of_inauguration_ceremonies
        //U. S. Presidents and their inauguration years
        this.data = {
            "presidents":[
                { "president": "George Washington", "inauguration": "1789"},
                { "president": "John Adams", "inauguration": "1797"},
                { "president": "Thomas Jefferson", "inauguration": "1801"},
                { "president": "James Madison", "inauguration": "1809"},
                { "president": "James Monroe", "inauguration": "1817"},
                { "president": "John Quincy Adams", "inauguration": "1825"},
                { "president": "Andrew Jackson", "inauguration": "1829"},
                { "president": "Martin Van Buren", "inauguration": "1837"},
                { "president": "William Henry Harrison", "inauguration": "1841"},
                { "president": "John Tyler", "inauguration": "1841"},
                { "president": "James K. Polk", "inauguration": "1845"},
                { "president": "Zachary Taylor", "inauguration": "1849"},
                { "president": "Millard Fillmore", "inauguration": "1850"},
                { "president": "Franklin Pierce", "inauguration": "1853"},
                { "president": "James Buchanan", "inauguration": "1857"},
                { "president": "Abraham Lincoln", "inauguration": "1861"},
                { "president": "Andrew Johnson", "inauguration": "1865"},
                { "president": "Ulysses S. Grant", "inauguration": "1869"},
                { "president": "Rutherford B. Hayes", "inauguration": "1877"},
                { "president": "James A. Garfield", "inauguration": "1881"},
                { "president": "Chester A. Arthur", "inauguration": "1881"},
                { "president": "Grover Cleveland", "inauguration": "1885"},
                { "president": "Benjamin Harrison", "inauguration": "1889"},
                { "president": "William McKinley", "inauguration": "1897"},
                { "president": "Theodore Roosevelt", "inauguration": "1901"},
                { "president": "William Howard Taft", "inauguration": "1909"},
                { "president": "Woodrow Wilson", "inauguration": "1913"},
                { "president": "Warren G. Harding", "inauguration": "1921"},
                { "president": "Calvin Coolidge", "inauguration": "1923"},
                { "president": "Herbert Hoover", "inauguration": "1929"},
                { "president": "Franklin D. Roosevelt", "inauguration": "1933"},
                { "president": "Harry S. Truman", "inauguration": "1945"},
                { "president": "Dwight D. Eisenhower", "inauguration": "1953"},
                { "president": "John F. Kennedy", "inauguration": "1961"},
                { "president": "Lyndon B. Johnson", "inauguration": "1963"},
                { "president": "Richard Nixon", "inauguration": "1969"},
                { "president": "Gerald Ford", "inauguration": "1974"},
                { "president": "Jimmy Carter", "inauguration": "1977"},
                { "president": "Ronald Reagan", "inauguration": "1981"},
                { "president": "George H. W. Bush", "inauguration": "1989"},
                { "president": "Bill Clinton", "inauguration": "1993"},
                { "president": "George W. Bush", "inauguration": "2001"},
                { "president": "Barack Obama", "inauguration": "2009"},
                { "president": "Donald Trump", "inauguration": "2017"}
            ]
        }

        this.tableHeadings = {
            "headings":[
                {"title": "President"},
                {"title": "Inauguration Year"}
            ]
        }
    }
}
