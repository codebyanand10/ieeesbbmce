#version 300 es
#define iterations 10
#define formuparam 0.575

#define volsteps 4
#define stepsize 0.3

#define speed  0.010

#define brightness 0.0015
#define saturation 1.0

#define blackholeCenter vec3(time,time,1.)

precision highp float;

out vec4 fragColor;

uniform vec2 iResolution;
uniform float iTime;
uniform vec2 u_offset;

void main()
{
    //get coords and direction
    vec2 uv=gl_FragCoord.xy/iResolution.xy + u_offset -0.5;
    uv.y*=iResolution.y/iResolution.x;
    vec3 dir=vec3(uv,0.);
    float time=iTime*speed;

    vec3 pos = blackholeCenter;
    float intensity = dot(pos, pos);
    intensity = 1.0 / intensity;

    //volumetric rendering
    float s=0.1;


    vec3 v=vec3(0.);
    for (int r=0; r<volsteps; r++) {
        vec3 p=blackholeCenter+s*dir;
        p = abs(vec3(0.7)-mod(p,vec3(1.4))); // tiling fold (multiplies tiles value by 0.7)
        float pa,a=pa=0.;
        for (int i=0; i<iterations; i++) {
            p=abs(p)/dot(p,p)-formuparam; // the magic formula
            a+=abs(length(p)-pa); // absolute sum of average change
        }
        a*=a*a;
        v+=vec3(s*s*s,s*s,s)*a*brightness; // coloring based on distance
        s+=stepsize;
    }
    fragColor = vec4(v*.01,1.);
}
