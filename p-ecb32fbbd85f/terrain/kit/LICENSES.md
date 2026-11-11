# Twin Ridges bedding cliff kit and rubble (pass 16)

Browser-sized derivatives of meshes prepared in Blender 5.2.2 from CC0 Poly Haven
photogrammetry scans. Each module ships a near mesh (`<kind>.glb`) and a far
`_lod1` mesh, EXT_meshopt_compression encoded, plus its own baked tangent-space
OpenGL normal map as JPEG (cliff: 1024/512, rubble: 512), with the baked
ambient occlusion sampled into the vertex colours (rubble LOD1 simplified with meshoptimizer).
Albedo comes from the shared kit shader (sandstone grade), so scan diffuse maps
are not shipped. Inward-facing shells were flipped so the textured face is +Z.
No BAR or Recoil assets or code are included.

All sources are [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/);
the derived modules remain CC0.

| Kind | Source | Author(s) |
| --- | --- | --- |
| `cliff_bed_a` | [Rock Face 01](https://polyhaven.com/a/rock_face_01) | Dario Barresi |
| `cliff_bed_b` | [Rock Face 02](https://polyhaven.com/a/rock_face_02) | Dario Barresi; Rico Cilliers (processing) |
| `cliff_ledge` | [Rock Face 01](https://polyhaven.com/a/rock_face_01) (top cut) | Dario Barresi |
| `cliff_rugged` | [Mountainside](https://polyhaven.com/a/mountainside) | Dario Barresi (photography); Rico Cilliers (processing) |
| `cliff_stack` | [Namaqualand Cliff 01](https://polyhaven.com/a/namaqualand_cliff_01) | Jenelle van Heerden (photography); Rico Cilliers (modeling) |
| `cliff_jointed` | [Namaqualand Cliff 02](https://polyhaven.com/a/namaqualand_cliff_02) | Dario Barresi (photography); Rico Cilliers (modeling) |
| `rubble_moss_a/b/c` | [Rock Moss Set 01](https://polyhaven.com/a/rock_moss_set_01) | Kless Gyzen |
| `rubble_boulder` | [Boulder 01](https://polyhaven.com/a/boulder_01) | Rico Cilliers |
| `rubble_slab_a` | [Rock 07](https://polyhaven.com/a/rock_07) | Jenelle van Heerden |
| `rubble_slab_b` | [Stone 01](https://polyhaven.com/a/stone_01) | Dario Barresi; Rico Cilliers |
| `rubble_flat_a/b` | [Namaqualand Stones 01](https://polyhaven.com/a/namaqualand_stones_01) | Greg Zaal (photography); Jenelle van Heerden (modeling) |
| `rubble_round` | [Namaqualand Rocks 01](https://polyhaven.com/a/namaqualand_rocks_01) | Greg Zaal (photography); Jenelle van Heerden (modeling) |
| `rubble_angular` | [Rock 09](https://polyhaven.com/a/rock_09) | Jenelle van Heerden |

These assets may be reused with the game.

## Buttresses (pass 19)

`buttress_a/b/c` (near and `_lod1`, with baked normal maps) are original procedural
meshes built in Blender 5.2.2 by `build_rock19.py`: convex-hull masses that taper upward,
with fracture chops. They contain no third-party geometry or textures. They are
dedicated to the public domain under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).

## Talus field (pass 20)

The cliff-foot talus field replaces the shader-painted scree cones with instanced copies of
the CC0 Poly Haven rubble scans listed above (`rubble_boulder`, `rubble_slab_a/b`,
`rubble_flat_a/b`, plus the existing big-rubble set). No new third-party assets were added.
