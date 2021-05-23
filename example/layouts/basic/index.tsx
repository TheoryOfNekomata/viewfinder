import * as React from 'react'
import * as ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown'
import Brand from '../../components/Brand';
import { Basic } from '../../..';

const Page = () => {
	return (
		<Basic.Layout
			brand={
				<Brand />
			}
			topBarCenter={
				<form
					style={{
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<input
						type="search"
						name="q"
						placeholder="Type your search keywords&hellip;"
						style={{
							height: '3rem',
							width: '100%',
							display: 'block',
							boxSizing: 'border-box',
						}}
					/>
					<button
						type="submit"
						style={{
							height: '3rem',
							marginLeft: '0.5rem',
						}}
					>
						Search
					</button>
				</form>
			}
			userLink={
				<a
					href="?user"
				>
					User
				</a>
			}
		>
			<Basic.ContentContainer>
				<ReactMarkdown
					components={{
						img: ({ src, alt, style, }) => (
							<img
								src={src}
								alt={alt}
								style={{
									...style,
									width: '100%',
								}}
							/>
						)
					}}
				>
					{`# Piano

![Bechstein Moor](/static/piano/bechstein-moor-grand-00.jpg)

The piano is an acoustic, stringed musical instrument invented in Italy by Bartolomeo Cristofori around the year 1700 (the exact year is uncertain), in which the strings are struck by wooden hammers that are coated with a softer material (modern hammers are covered with dense wool felt; some early pianos used leather). It is played using a keyboard, which is a row of keys (small levers) that the performer presses down or strikes with the fingers and thumbs of both hands to cause the hammers to strike the strings.

![Bechstein Moor](/static/piano/bechstein-moor-grand-01.jpg)

The word piano is a shortened form of pianoforte, the Italian term for the early 1700s versions of the instrument, which in turn derives from gravicembalo col piano e forte (key cymbal with quieter and louder) and fortepiano. The Italian musical terms piano and forte indicate "soft" and "loud" respectively, in this context referring to the variations in volume (i.e., loudness) produced in response to a pianist's touch or pressure on the keys: the greater the velocity of a key press, the greater the force of the hammer hitting the strings, and the louder the sound of the note produced and the stronger the attack. The name was created as a contrast to harpsichord, a musical instrument that does not allow variation in volume; compared to the harpsichord, the first fortepianos in the 1700s had a quieter sound and smaller dynamic range.

![Bösendorfer Moor](/static/piano/boesendorfer-moor-grand-00.jpg)

A piano usually has a protective wooden case surrounding the soundboard and metal strings, which are strung under great tension on a heavy metal frame. Pressing one or more keys on the piano's keyboard causes a wooden or plastic hammer (typically padded with firm felt) to strike the strings. The hammer rebounds from the strings, and the strings continue to vibrate at their resonant frequency. These vibrations are transmitted through a bridge to a soundboard that amplifies by more efficiently coupling the acoustic energy to the air. When the key is released, a damper stops the strings' vibration, ending the sound. Notes can be sustained, even when the keys are released by the fingers and thumbs, by the use of pedals at the base of the instrument. The sustain pedal enables pianists to play musical passages that would otherwise be impossible, such as sounding a 10-note chord in the lower register and then, while this chord is being continued with the sustain pedal, shifting both hands to the treble range to play a melody and arpeggios over the top of this sustained chord. Unlike the pipe organ and harpsichord, two major keyboard instruments widely used before the piano, the piano allows gradations of volume and tone according to how forcefully or softly a performer presses or strikes the keys.

![Bösendorfer Moor](/static/piano/boesendorfer-moor-grand-01.jpg)

Most modern pianos have a row of 88 black and white keys, 52 white keys for the notes of the C major scale (C, D, E, F, G, A and B) and 36 shorter black keys, which are raised above the white keys, and set further back on the keyboard. This means that the piano can play 88 different pitches (or "notes"), going from the deepest bass range to the highest treble. The black keys are for the "accidentals" (F♯/G♭, G♯/A♭, A♯/B♭, C♯/D♭, and D♯/E♭), which are needed to play in all twelve keys. More rarely, some pianos have additional keys (which require additional strings), an example of which is the Bösendorfer Concert Grand 290 Imperial, which has 97 keys. Most notes have three strings, except for the bass, which graduates from one to two. The strings are sounded when keys are pressed or struck, and silenced by dampers when the hands are lifted from the keyboard. Although an acoustic piano has strings, it is usually classified as a percussion instrument rather than as a stringed instrument, because the strings are struck rather than plucked (as with a harpsichord or spinet); in the Hornbostel–Sachs system of instrument classification, pianos are considered chordophones. There are two main types of piano: the grand piano and the upright piano. The grand piano has a better sound and gives the player a more precise control of the keys, and is therefore the preferred choice for every situation in which the available floor-space and the budget will allow, as well as often being considered a requirement in venues where skilled pianists will frequently give public performances. The upright piano, which necessarily involves some compromise in both tone and key action compared to a grand piano of equivalent quality, is nevertheless much more widely used, because it occupies less space (allowing it to fit comfortably in a room where a grand piano would be too large) and is significantly less expensive.

![Bösendorfer Moor](/static/piano/boesendorfer-moor-grand-02.jpg)

During the 1800s, influenced by the musical trends of the Romantic music era, innovations such as the cast iron frame (which allowed much greater string tensions) and aliquot stringing gave grand pianos a more powerful sound, with a longer sustain and richer tone. In the nineteenth century, a family's piano played the same role that a radio or phonograph played in the twentieth century; when a nineteenth-century family wanted to hear a newly published musical piece or symphony, they could hear it by having a family member play a simplified version on the piano. During the nineteenth century, music publishers produced many types of musical works (symphonies, opera overtures, waltzes, etc.) in arrangements for piano, so that music lovers could play and hear the popular pieces of the day in their home. The piano is widely employed in classical, jazz, traditional and popular music for solo and ensemble performances, accompaniment, and for composing, songwriting and rehearsals. Although the piano is very heavy and thus not portable and is expensive (in comparison with other widely used accompaniment instruments, such as the acoustic guitar), its musical versatility (i.e., its wide pitch range, ability to play chords, louder or softer notes and two or more independent musical lines at the same time), the large number of musicians - both amateurs and professionals - trained in playing it, and its wide availability in performance venues, schools and rehearsal spaces have made it one of the Western world's most familiar musical instruments.`}
				</ReactMarkdown>
			</Basic.ContentContainer>
		</Basic.Layout>
	)
}

const root = document.createElement('div')

ReactDOM.render(<Page />, root);

document.body.appendChild(root);
