# Twin Ridges cliff, boulder and scree meshes

Game-budget meshes decimated in Blender from CC0 Poly Haven photogrammetry
scans. Original UVs and OpenGL normals are kept; albedos are graded to the
same grey-tan family as the cliff atlas. No BAR or Recoil assets are included.
All sources are [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).

- `cliff0` — [Namaqualand Cliff 01](https://polyhaven.com/a/namaqualand_cliff_01) — photography Jenelle van Heerden; modeling Rico Cilliers. Native ~14.6 × 7.5 × 8.5 m, 4000 tris.
- `cliff1` — [Rock Face 01](https://polyhaven.com/a/rock_face_01) — Dario Barresi. Native ~11.9 × 9.3 × 8.5 m, 4000 tris.
- `cliff2` — [Namaqualand Cliff 02](https://polyhaven.com/a/namaqualand_cliff_02) — photography Dario Barresi; modeling Rico Cilliers. Native ~23.9 × 8.2 × 8.5 m, 4657 tris.
- `rock0` — [Boulder 01](https://polyhaven.com/a/boulder_01) — Rico Cilliers. Native ~1.3 × 1.8 × 1.0 m, 1572 tris.
- `rock1` — [Namaqualand Boulder 05](https://polyhaven.com/a/namaqualand_boulder_05) — photography Dario Barresi; modeling Jenelle van Heerden. Native ~0.5 × 0.7 × 1.4 m, 1999 tris.
- `rock2` — [Namaqualand Boulder 03](https://polyhaven.com/a/namaqualand_boulder_03) — photography Dario Barresi; modeling Jenelle van Heerden. Native ~2.4 × 1.5 × 3.1 m, 1554 tris.
- `scree0` — [Namaqualand Rocks 01](https://polyhaven.com/a/namaqualand_rocks_01) — photography Greg Zaal; modeling Jenelle van Heerden. Native ~1.45 × 0.21 × 0.15 m cluster, 2499 tris.

Pass 7 kit additions, also CC0 1.0, decimated in Blender 5.2.2 with the scanned OpenGL normal kept and resized (photogrammetry detail survives the low-poly mesh). Each module ships a near mesh and a `_lod1` far mesh.

- `cliff3` — [Rock Face 02](https://polyhaven.com/a/rock_face_02) — photography Dario Barresi; processing Rico Cilliers. Native ~10.2 × 6.7 × 8.6 m after sit/scale, ~4000 / 1200 tris.
- `cliff4` — [Mountainside](https://polyhaven.com/a/mountainside) — photography Dario Barresi; processing Rico Cilliers. Native ~10.3 × 5.4 × 10.5 m, ~3700 / 1400 tris.
- `cliff5` — [Coastal Cliff 04](https://polyhaven.com/a/coastal_cliff_04) — photography and processing Rob Tuytel; cleanup Rico Cilliers. A long wall module, height clamped in placement so it stays in the 8–25 m band.

Albedos are graded to a shared mid-value grey granite (brown is kept for soil seams in the wall shader only). No BAR or Recoil assets are included.

These assets may be reused with the game.

Pass 16: the main cliff kit and talus rubble moved to `terrain/kit/` (bedding
wall, ledge, stack and jointed modules plus ten rubble pieces, all CC0 Poly
Haven derivatives). See `assets/terrain/kit/LICENSES.md`.
