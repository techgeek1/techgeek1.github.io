<div class="hero" markdown>

# Austin Rife

<p class="subtitle">Engine Programmer</p>
<p class="tagline">When the box isn't big enough, I build a new one. Preferably in Rust.</p>

<div class="skills">
  <span class="skill">Rust</span>
  <span class="skill">C++</span>
  <span class="skill">HLSL</span>
  <span class="skill">Vulkan</span>
  <span class="skill">Unreal Engine</span>
</div>

</div>

## About Me

---

I build the systems at the foundation. Engine architecture, core systems, performance-critical code, and the tools that tie it all together. The low-level and broad reaching work where getting it wrong means everything above is wrong too.

Professionally, I've shipped four VR titles across two studios, with a consistent thread of performance optimization and developer tooling. I owned the cinematics systems for three of them, evolving the design across each iteration.

I'm drawn to the hard problems that few want to touch: software architecture, systems design, compilers, graphics pipelines. The foundational work that rewards careful thinking and quietly makes everything else possible.

## Portfolio

---

<div class="card-grid" markdown>

<div class="card" data-card-id="unannounced" markdown>
<div class="card-banner-placeholder">
  <span class="card-year">2026</span>
</div>
<div class="card-content" markdown>

### Unannounced VR Title

AAA VR project under NDA. Deep engine and systems work. Spatial partitioning, audio streaming, engine optimizations, and cinematics system v2.

<div class="card-details" markdown>

#### Contributions

- **Cinematics System v2** — Ground-up rewrite of the cinematics tooling, building on lessons from v1.
- **Automated IGC Pipeline** — Built fully automated cinematic rendering pipeline capturing 360 video and posting to SyncSketch for review.
- **Spatial Partitioning** — Hierarchical spatial data structures for efficient world queries and streaming.
- **Audio Streaming** — FMOD bank loading and audio memory optimization.
- **Motion Matching Investigation** — Evaluated feasibility of motion matching in Unreal with animation team. Abandoned due to system bugs.
- **Engine Optimization** — Ongoing performance analysis and low-level optimization work.
- **AI Workflow Integration** — Explored integrating AI tools into production workflows.

#### Context

Unreleased AAA VR title. Unable to share further details due to NDA.

</div>
</div>
<button class="card-close">&times;</button>
</div>

<div class="card" data-card-id="asgards-wrath-2" markdown>
<picture>
  <source srcset="../images/asgards-wrath-2.webp" type="image/webp">
  <img class="card-banner" src="../images/asgards-wrath-2.jpg" alt="Asgard's Wrath 2">
</picture>
<span class="card-year">2023</span>
<div class="card-content" markdown>

### [Asgard's Wrath 2](https://www.meta.com/experiences/asgards-wrath-2/2603836099654226/)

AAA VR action RPG for Meta Quest 2/3. 60+ hour Norse mythology epic. Built cinematics system, save system, AI prototype. Executed major engine upgrade.

<div class="card-details" markdown>

#### Contributions

- **Cinematics System** — Designed and built custom node-graph cinematics tooling from scratch. Scaled team adoption from 3 to 30 users. Shipped a Pixar-movie's worth of cinematic content.
- **Save System** — Sole owner of save/load architecture handling complex world state across 60+ hours of gameplay.
- **HTN AI Prototype** — Wrote the hierarchical task network prototype that evolved into the game's AI systems.
- **Engine Upgrade (UE 4.25→4.27)** — Primary engineer for 6 months of a year-long major engine upgrade, merging extensive custom engine changes and ensuring stability at switchover.
- **Packaging Optimizations** — Custom smart world pointer implementation for reduced package sizes.
- **Performance** — Ongoing performance analysis, optimization, and Blueprint VM profiling work.

#### Context

Award-winning 60+ hour action RPG for Meta Quest 2/3. One of the largest and most ambitious VR titles to date, pushing the boundaries of standalone hardware.

</div>
</div>
<button class="card-close">&times;</button>
</div>

<div class="card" data-card-id="asgards-wrath" markdown>
<picture>
  <source srcset="../images/asgards-wrath.webp" type="image/webp">
  <img class="card-banner" src="../images/asgards-wrath.jpg" alt="Asgard's Wrath">
</picture>
<span class="card-year">2019</span>
<div class="card-content" markdown>

### [Asgard's Wrath](https://www.meta.com/experiences/pcvr/asgards-wrath/1180401875303371/)

AAA VR action RPG for Oculus Rift. Award-winning Norse mythology adventure. IGC systems, NPC logic, paired animations, and gameplay mechanics.

<div class="card-details" markdown>

#### Contributions

- **IGC Systems** — Owned the in-game cinematic systems, building on inherited design from another engineer.
- **NPC Logic** — Implemented fairy companion and tavern NPC behavior systems.
- **Paired Animations** — Built paired animation support used across narrative setpieces throughout the game.
- **Lock & Key System** — Wrote the lock and key mechanism used on all doors in the game.
- **Buoyancy Integration** — Integrated buoyancy physics into opening IGC with PID-based following for convincing water movement. Resolved obscure undefined behavior.
- **Gameplay Mechanics** — Wrote the explosives mechanic for destructible props.
- **Performance** — Ongoing performance analysis and optimization.

#### Context

Award-winning VR action RPG that set a new standard for depth and polish in VR gaming. Built for Oculus Rift, later updated for Quest 2 via Air Link.

</div>
</div>
<button class="card-close">&times;</button>
</div>

<div class="card" data-card-id="marvel-powers-united" markdown>
<picture>
  <source srcset="../images/marvel-powers-united.webp" type="image/webp">
  <img class="card-banner" src="../images/marvel-powers-united.jpg" alt="Marvel Powers United VR" loading="lazy">
</picture>
<span class="card-year">2018</span>
<div class="card-content" markdown>

### [Marvel Powers United VR](https://www.marvel.com/games/marvel-powers-united-vr)

Cooperative VR brawler for Oculus Rift. 4-player online co-op with iconic Marvel heroes. Joined late to help ship.

<div class="card-details" markdown>

#### Contributions

- **Critical Bug Fix** — Diagnosed and resolved an extremely obscure threading/networking/GPU sync bug over 1-2 months. Critical path blocker.
- **Performance** — Performance analysis and optimization.
- **Ship Support** — Various bug fixes and data upgrades as needed to get the game out the door.

#### Context

Cooperative VR brawler letting players embody Marvel superheroes. 4-player online co-op with a roster of iconic characters. Joined the project near completion to help push it across the finish line.

</div>
</div>
<button class="card-close">&times;</button>
</div>

<div class="card" data-card-id="cyberpong" markdown>
<picture>
  <source srcset="../images/cyberpong.webp" type="image/webp">
  <img class="card-banner card-banner--top-15" src="../images/cyberpong.jpg" alt="Cyberpong" loading="lazy">
</picture>
<span class="card-year">2016</span>
<div class="card-content" markdown>

### [Cyberpong](https://store.steampowered.com/app/462000/Cyberpong/)

Futuristic VR pong for HTC Vive. Arcade and home release. Networked AI, localization, and arcade tooling.

<div class="card-details" markdown>

#### Contributions

- **Networked AI** — Rewrote the single-player AI system to support networked multiplayer matches.
- **Localization System** — Built localization infrastructure from scratch (Unity lacked built-in support at the time).
- **VR Arcade Tooling** — Wrote external setup tool for VR arcades and configured game for arcade deployment.

#### Context

Futuristic VR pong for arcade and home VR. 3-month stint during the early days of consumer VR.

</div>
</div>
<button class="card-close">&times;</button>
</div>

<div class="card" data-card-id="eden" markdown>
<div class="card-banner-eden"><img src="../images/eden-logo.svg" alt="Eden"></div>
<span class="card-year">Ongoing</span>
<div class="card-content" markdown>

### Eden

Personal game engine. 7 years, 75+ crates, built almost entirely solo before AI coding tools existed. Ground-up systems exploration.

<div class="card-details" markdown>

#### Highlights

- **Custom ECS** - Data-oriented entity component system with runtime archetype queries.
- **Vulkan Renderer** - GPU-driven rendering architecture with bindless resources.
- **Asset System** - Thread-safe objects-with-properties system with hot-reloading and incremental compilation.
- **EFX Shader Language** - Metalanguage on top of HLSL providing structure and heavy codegen for shader authoring.
- **Silk UI Framework** - Custom reactive UI framework built from scratch.

#### Scope

75+ crates covering a custom standard library, math, platform abstractions, job system and threading primitives, serialization (including custom binary format), virtual file system, build tooling, and more.

#### Why

Understanding engines at a level most developers never want or need to. When you've built the entire stack yourself, debugging someone else's becomes a lot easier. Strong opinions, formed by actually building instead of just using.

</div>
</div>
<button class="card-close">&times;</button>
</div>

</div>

## Contact

---

<p class="contact-intro">Interested in working together? Feel free to reach out.</p>

<div class="contact-links" markdown>

[:fontawesome-solid-envelope: Email](mailto:contact@techgeek1.dev){ .contact-link }
[:fontawesome-brands-linkedin: LinkedIn](https://linkedin.com/in/austin-rife){ .contact-link }
[:fontawesome-brands-github: GitHub](https://github.com/techgeek1){ .contact-link }

</div>

<p class="contact-status">Currently exploring opportunities in game engine development, simulation technology, and systems programming.</p>
