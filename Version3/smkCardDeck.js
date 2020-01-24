"use strict"

//card data retrieved from http://sorcerersofthemk.com/?page_id=30

class SmkCardDeck{
    constructor(){
        this.deck = {
            "smk_cards":[
                {
                    "card":"1. Apprentice Mickey Broomsticks", 
                    "spell":"Mystical"
                },
                {
                    "card":"2. Belle Mountain Blizzard",
                    "spell":"Princess"
                },
                {
                    "card":"3. Buzz Lightyear Astro Blasters", 
                    "spell":"Machine"
                },
                {
                    "card":"4. Doris Bowler Hat Attack", 
                    "spell": "Machine"
                },
                {
                    "card":"5. Eve Laser Blast", 
                    "spell":"Princess"
                },
                {
                    "card":"6. Mulan’s Dragon Cannon", 
                    "spell":"Princess"
                },
                {
                    "card":"7. Flynn Rider Flying Frying Pan",
                    "spell":"Warrior"
                },
                {
                    "card":"8. King Triton Trident", 
                    "spell":"Warrior"
                },
                {
                    "card":"9. Lython Rock Titan Boulder Throw",
                    "spell":"Monster"
                },
                {
                    "card":"10. Maurice Wood Chopper", 
                    "spell":"Hero"
                },
                {
                    "card":"11. Maximus Horseshoes", 
                    "spell":"Animal"
                },
                {
                    "card":"12. Merlin Fireball", 
                    "spell":"Mystic"
                },
                {
                    "card":"13. Monstro Water Spout", 
                    "spell":"Animal"
                },
                {
                    "card":"14. Nib Neverland Assault", 
                    "spell":"Hero"
                },
                {
                    "card":"15. Rapunzel Hair Whip", 
                    "spell":"Princess"
                },
                {
                    "card":"16. Robin Hood Magic Arrow", 
                    "spell":"Warrior"
                },
                {
                    "card":"17. Simba Roar", 
                    "spell":"Animal"
                },
                {
                    "card":"18. Fairy Godmother Pumpkin Bash", 
                    "spell":"Fairy"
                },
                {
                    "card":"19. The Giant Giant Stomp", 
                    "spell":"Monster"
                },
                {
                    "card":"20. Tinker Bell Pixie Dust", 
                    "spell":"Fairy"
                },
                {
                    "card":"21. Violet Force Field", 
                    "spell":"Hero"
                },
                {
                    "card":"22. Woody Cowboy Lasso", 
                    "spell":"Toy"
                },
                {
                    "card":"23. Aladdin Lamp", 
                    "spell":"Warrior"
                },
                {
                    "card":"24. Bolt Super Bark", 
                    "spell":"Animal"
                },
                {
                    "card":"25. Cinderella Magic Ribbon", 
                    "spell":"Princess"
                },
                {
                    "card":"26. Colonel Hathi Rigteous Stomp", 
                    "spell":"Animal"
                },
                {
                    "card":"27. Eeyore Gloomy Cloud", 
                    "spell":"Toy"
                },
                {
                    "card":"28. Frozone Ice Blast", 
                    "spell":"Hero"
                },
                {
                    "card":"29. Lightning McQueen Ka-Chow", 
                    "spell":"Machine"
                },
                {
                    "card":"30. Mickey’s Magic Beans", 
                    "spell":"Hero"
                },
                {
                    "card":"31. Mike Wazowski Grand Entrance", 
                    "spell":"Monster"
                },
                {
                    "card":"32. Pinocchio Sawdust Blast", 
                    "spell":"Toy"
                },
                {
                    "card":"33. Prince Phillip Enchanted Sword", 
                    "spell":"Warrior"
                },
                {
                    "card":"34. Snow White Housecleaning", 
                    "spell":"Princess"
                },
                {
                    "card":"35. The Headless Horseman Exploding Jack-o-Lantern", 
                    "spell":"Monster"
                },
                {
                    "card":"36. The Mad Hatter Tea Time", 
                    "spell":"Mystic"
                },
                {
                    "card":"37. The Queen of Hearts Card Army", 
                    "spell":"Warrior"
                },
                {
                    "card":"38. The Sugar Plum Fairies Dewdrop Spiderweb", 
                    "spell":"Fairy"
                },
                {
                    "card":"39. Wall-E Trash Crunch", 
                    "spell":"Machine"
                },
                {
                    "card":"40. Yen Sid Sorcerer’s Hat", 
                    "spell":"Mystic"
                },
                {
                    "card":"41. Aurora Rose Petals", 
                    "spell":"Princess"
                },
                {
                    "card":"42. Baloo Coconut Cascade", 
                    "spell":"Animal"
                },
                {
                    "card":"43. Caballero Donald Piñata", 
                    "spell":"Warrior"
                },
                {
                    "card":"44. Dash Whirlwind", 
                    "spell":"Hero"
                },
                {
                    "card":"45. Flower Flowers", 
                    "spell":"Animal"
                },
                {
                    "card":"46. Gopher Demolition Dynamite", 
                    "spell":"Toy"
                },
                {
                    "card":"47. Grumpy Pummeling Pickaxe", 
                    "spell":"Hero"
                },
                {
                    "card":"48. Lumiere Candle Blast", 
                    "spell":"Warrior"
                },
                {
                    "card":"49. Mowgli Swinging Vine ", 
                    "spell":"Warrior"
                },
                {
                    "card":"50. Mr. Toad Wild Ride", 
                    "spell":"Hero"
                },
                {
                    "card":"51. Pocahontas Colors of the Wind", 
                    "spell":"Princess"
                },
                {
                    "card":"52. Pongo Soot Bucket ", 
                    "spell":"Animal"
                },
                {
                    "card":"53. Prince Naveen Army of Frogs", 
                    "spell":"Hero"
                },
                {
                    "card":"54. Pumbaa Odorous Gas", 
                    "spell":"Animal"
                },
                {
                    "card":"55. Quasimodo Bell", 
                    "spell":"Monster"
                },
                {
                    "card":"56. Rafiki Wisdom Stick", 
                    "spell":"Mystic"
                },
                {
                    "card":"57. The Blue Fairy Wand Wish", 
                    "spell":"Fairy"
                },
                {
                    "card":"58. The Woozles Woozle Nightmare", 
                    "spell":"Animal"
                },
                {
                    "card":"59. Thumper Mighty Thump", 
                    "spell":"Animal"
                },
                {
                    "card":"60. Tiana Hot Sauce", 
                    "spell":"Princess"
                },
                {
                    "card":"61. Ariel Bubble Attack", 
                    "spell":"Princess"
                },
                {
                    "card":"62. Dumbo Elephant Parade", 
                    "spell":"Animal"
                },
                {
                    "card":"63. Finn McMissle Missile Salvo ", 
                    "spell":"Machine"
                },
                {
                    "card":"64. Hercules Tower Topple", 
                    "spell":"Warrior"
                },
                {
                    "card":"65. Jasmine Magic Carpet Tassels of Fury", 
                    "spell":"Princess"
                },
                {
                    "card":"66. Mama Odie Magic Charm", 
                    "spell":"Mystic"
                },
                {
                    "card":"67. Merryweather Stone", 
                    "spell":"Fairy"
                },
                {
                    "card":"68. Mr. Incredible Power Heave", 
                    "spell":"Hero"
                },
                {
                    "card":"69. Mushu Fiery Breath", 
                    "spell":"Monster"
                },
                {
                    "card":"70. Winnie the Pooh Honey Bees", 
                    "spell":"Toy"
                }
            ]
        }

        this.tableHeadings = {
            "headings":[
                {"title": "Card Name"},
                {"title": "Spell Type"}
            ]
        }
    }
}
