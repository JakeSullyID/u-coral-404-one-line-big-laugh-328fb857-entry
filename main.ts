import fs from 'node:fs';
import path from 'node:path';

// A small everyday inconvenience magnified into epic historical tragedy.
// Seed chosen: everyday inconvenience as epic tragedy; framing a minor shortage like a post-apocalyptic dark age subverts expectations.
// Misdirection: building solemn gravitas through survivalist terminology before revealing the mundane bathroom context delivers the punch.
// Cut the padded middle description of huddling in gloom to sharpen the focus directly onto the cardboard roll and royal tomb comparison.
// The final mention of 'three-ply' snaps the solemn royal tragedy back to mundane bathroom reality with a sharp comedic deflation.
// Introducing the phone call on speaker turns the poetic observation into an active joke by clashing epic myth with cringe reality.
// The reader expects a continuation of solemn historical grief, but the sudden intrusion of speakerphone instantly shatters the illusion for maximum comedic contrast.
const line = "We wept over the cardboard roll like mourners at a royal tomb, whispering tales of the mythical three-ply until Dave took a phone call on speaker.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), line + '\n');
