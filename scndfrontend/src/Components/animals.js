import React from "react";
import Card1 from "./card1";
import Card from "./card";

const Animals = () => {
  const Animalsarray = [
    {
      category: "Mammals",
      examples: "Humans,rats,bats",
      description: "It's natural for people to consider mammals the pinnacle of evolution. After all, humans are mammals, and so were our ancestors. But In fact, mammals are among the least diverse animal groups: There are only about 5,000 species overall. Mammals are characterized by their hair or fur, which all species possess during some stage of their life cycles",
    },
    {
      category: "Birds",
      examples: "ostriches of the Australian plains and the penguins of the Antarctic coastline.",
      description: "Birds evolved from dinosaurs—not once, but probably multiple times—during the Mesozoic Era. Today they are by far the most prolific flying vertebrates, numbering 10,000 species across 30 separate orders.",
    },
    {
      category: "Amphibians",
      examples: "the frogs, toads, salamanders, and caecilians",
      description: "When the first amphibians evolved from their tetrapod ancestors 400 million years ago, they quickly became the dominant vertebrates on Earth. However, their reign wasn't destined to last.",
    },
    {
      category: "Fish",
      examples: "sharks, rays, and skates",
      description: "The first true vertebrates on Earth, fish evolved from invertebrate ancestors about 500 million years ago and have dominated the world's oceans, lakes, and rivers ever since. There are three main types of fish: bony fish, cartilaginous fish,jawless fish.",
    },
    {
      category: "Invertebrates",
      examples: " insects, worms, arthropods, sponges, mollusks, octopuses",
      description: "The first animals to evolve, as far back as a billion years ago, invertebrates are characterized by their lack of backbones and internal skeletons as well as their relatively simple anatomy and behavior, at least compared with those of most vertebrates. ",
    },
    {
      category: "Reptiles",
      examples: "crocodiles and alligators; turtles and tortoises; snakes; and lizards",
      description: "Reptiles, like amphibians, make up a fairly small proportion of terrestrial animals, but as dinosaurs they ruled the Earth for over 150 million years. There are four basic types of reptiles: crocodiles and alligators; turtles and tortoises; snakes; and lizards.",
    },
  ];

  return (
    <>
      {Animalsarray.map((candidate, key) => {
        return (
          <>
            <Card1
              current={key}
              category={candidate.category}
              example={candidate.example}
              description={candidate.description}
            />
          </>
        );
      })}
      <Card/>
    </>
  );
};

export default Animals;
