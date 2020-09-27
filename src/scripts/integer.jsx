import React from "react";

export default function randomInteger(
  length,
  numberOfWords,
  includeNumbers,
  includeWords,
  includeLower,
  includeUpper,
  includeSpecial
) {
  let words =
    "Unamended epenthetic contributiveness johnsonese cypriote bolshevikism liaise leucorrhoeal rasmussen jacquelyn formalin recentness rattrap ventricosity sublaryngeal performer arlyne mariehamn bigotry expanse nonportable accordantly boulle nonisotropous comprador kedushoth haemagglutinated apogamic unbred. Unlearned unsquandered curd antheridial determinedly lethargising thereto vesicated tambov synchronically exon interfemoral stercorous epigeous unanxious hypersthenic frankish aristocratical counterpoise calibration enfeoff futileness decurrently articulatorily custodial rustproof graving mawkish chorioallantois. Desolation buckler kakistocracy hirohito australianize near loudish zygogenetic royalise presentation knies logistical propylene archaeomagnetism choreatic wetting frap subliminally choler conflation dahabeah fiendishness hypozeugma unequivalent prostrative unsating practicality africanize stealing Insurgence journalist sprat felicia amelia pellety putrilage chieftain decennially cockiness yawmeter glissading daguerreotyping materializer oruro prespecialist maudlin nonelucidating maeander d''arrest perorational hedgier stratopause gun dressy warmish trinocular intransigeance preconspiring. Undro sextantis inculpableness drumming perpetuality amphilochus pyramidal organicism busching demophon aglimmer sophisticalness laigh gliadine nonadherent persian subsecretarial unbeaued interaffiliation culm constableship strict gregariously ellison subtetanical victorien tobol ermentrude meinies. Nonemancipative meatuses islamic serene prosyndicalism maana mayakovski cowpuncher monogamist hurtful bourdon delator sieving nonobedience overaffirmation crabs brinkley momuses rhamnaceous wingedly indefinite untreasured nonpursuant unfeatured statolith caroche reindulging proponed nonparasitism Halophilous nonomissible richet unmaimed tantalizingly pretransmission ovenbird justitia semimountainous genealogically facultative subconcession sweating undiffident reusability hormonal wanchan superconfirmation preshaping gunwale mringue rushmore colly whisperous pursiness subordinal kiloampere tricorne overbraked. Palpitating caput castilian postapostolic deployment unmechanized rudimentarily noncounteractive perceivable leucoma unarching immature uredinium perambulating immethodicalness uninstigated westing neolithic endamoeba prosaically juicier kuvaszok hanuman undersuit undamaging hoop estimated dipodic unargumentative. Pseudocritical subbrigade toroidally portend triduum nitrogenous terminator anthropomorphization nondexterous unshunned promiser samnium semidestructive scampishly solemn laloplegia unpaved noncapital equidistance linearization flavone allergic eritrea imbolden patonce sug scamander sigh unfarced";
  let arrWords = words.split(" ");
  let collectFrom = [];
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
  const uppercase = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  const specials = "!@£$%^&*()+_{}".split("");
  let result = [];

  if (includeNumbers) {
    collectFrom.push(digits);
  }
  if (includeLower) {
    collectFrom.push(lowercase);
  }
  if (includeUpper) {
    collectFrom.push(uppercase);
  }
  if (includeSpecial) {
    collectFrom.push(specials);
  }

  if (includeWords) {
  }

  if (collectFrom.length > 0) {
    for (let i = 0; i < length; i++) {
      let randomElement = Math.floor(
        Math.floor(Math.random() * collectFrom.length)
      );
      let selectedArray = collectFrom[randomElement];
      result.push(
        selectedArray[Math.floor(Math.random() * selectedArray.length)]
      );
    }
  }

  if (includeWords) {
    let internalWords = [];
    for (let i = 0; i < numberOfWords; i++) {
      let randomElement = Math.floor(
        Math.floor(Math.random() * arrWords.length)
      );
      let selectedWord = arrWords[randomElement];
      internalWords.push(selectedWord);
    }
    result.push(internalWords.join("-"));
  }
  console.log("words, ", arrWords);
  return <>Your random a code is.... {result.join("")}</>;
}
