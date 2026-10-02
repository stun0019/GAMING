// Surface relief in view space. Shared by building and road PBR shaders.
export function addSurfaceRelief(shader, height, strength, guard = '') {
  const relief = `
  { float vrHeight = ${height};
    vec3 vrDx = dFdx(-vViewPosition), vrDy = dFdy(-vViewPosition);
    vec3 vrR1 = cross(vrDy, normal), vrR2 = cross(normal, vrDx);
    float vrDet = dot(vrDx, vrR1);
    vec3 vrGrad = sign(vrDet) * (dFdx(vrHeight) * vrR1 + dFdy(vrHeight) * vrR2);
    float vrFade = 1.0 - smoothstep(12.0, 45.0, length(vViewPosition));
    // Bound the gradient at UV seams to prevent spikes and unstable highlights.
    float vrMax = max(abs(vrDet), 1e-8) * 0.38;
    vrGrad *= min(1.0, vrMax / max(length(vrGrad), 1e-8));
    normal = normalize(max(abs(vrDet), 1e-8) * normal - vrGrad * vrFade * (${strength}));
  }`;
  shader.fragmentShader = shader.fragmentShader.replace(
    '#include <normal_fragment_maps>',
    '#include <normal_fragment_maps>\n' + (guard ? '#if '+guard+'\n'+relief+'\n#endif' : relief)
  );
}
