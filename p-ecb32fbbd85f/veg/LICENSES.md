# Twin Ridges vegetation assets

Mesh construction and most textures in this folder were authored for ironfront-rts in November 2026.

- Original leaf, grass and rock textures were generated with `client/tools/veg/build_textures.py`.
- Tree, bush, grass-clump and rock meshes were built in Blender 5.2 on the laptop with `client/tools/veg/build_meshes.py` and exported as mesh-only glTF (`.glb`).
- Crown leaf-cluster atlases and bark albedos are packed crops of CC0 photo textures (`client/tools/veg/pack_clusters.py`, `client/tools/veg/pack_after6.py`). The aspen cluster atlas is a colour grade of the oak pack; aspen bark is a paler grade of Tree Bark 03. Sage clusters stay on the jacaranda pack.

## Third-party CC0 sources

All of the following are published on Poly Haven under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). Only 2D maps were used; accompanying 3D models were not imported.

### Bark

- **tree_bark_03** diffuse — oak bark, and a paler grade for aspen.
  https://polyhaven.com/a/tree_bark_03
  Photography: Rob Tuytel.
- **pine_bark** diffuse — pine bark.
  https://polyhaven.com/a/pine_bark
  Photography: Dimitrios Savva.
- **jolcham_oak_bark_01** diffuse — sage bark (lifted so it still reads in shadow).
  https://polyhaven.com/a/jolcham_oak_bark_01
  Photography: Charlotte Baglioni.

### Leaf-cluster atlases and LOD2 crown stamps

- **fir_tree_01** twig maps (diffuse + alpha) — primary pine cluster cards and pine crown stamps.
  https://polyhaven.com/a/fir_tree_01
  Photography: Rob Tuytel. Modeling: Rico Cilliers.
- **pine_tree_01** twig maps — two clean sprigs cropped from the unique-UV atlas.
  https://polyhaven.com/a/pine_tree_01
  Photography: Rob Tuytel. Modeling: Rico Cilliers.
- **jacaranda_tree** leaves maps — sage volume fillers and sage crown stamps.
  https://polyhaven.com/a/jacaranda_tree
  Photography: Rob Tuytel. Modeling: Rico Cilliers.
- **shrub_03** leaf maps — rounded heart-shaped leaves packed into oak (and graded aspen) cluster cards and oak/aspen crown stamps.
  https://polyhaven.com/a/shrub_03
  Modeling / textures: Rico Cilliers.

No BAR or Recoil meshes, shaders, or textures are included. These assets may be reused with the game.

## Cliff kit and rubble (pass 16)

The bedding cliff modules and rubble pieces live in `terrain/kit/`; sources and
authors (all CC0 1.0, Poly Haven) are listed in `assets/terrain/kit/LICENSES.md`.

## Photo grass and ferns (pass 17)

`grass_tall`, `grass_med`, `grass_mixed`, `grass_short`, `fern_spread`, `fern_crown`
(and their `_lod1` cuts) plus `foliage_atlas.webp` are split, card-thinned and
re-encoded from a foliage kit built from these Poly Haven assets (all CC0 1.0):

- **grass_medium_01** — https://polyhaven.com/a/grass_medium_01
  Photography: Rob Tuytel. Modeling: Rico Cilliers.
- **grass_medium_02** — https://polyhaven.com/a/grass_medium_02
  Rico Cilliers (all).
- **grass_bermuda_01** — https://polyhaven.com/a/grass_bermuda_01
  Rico Cilliers (all).
- **fern_02** — https://polyhaven.com/a/fern_02
  Scanning: Rob Tuytel. Modeling: Rico Cilliers.

Derivatives of CC0 material; they remain CC0. No BAR or Recoil assets.
