(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,30728,e=>{"use strict";var t=e.i(32009);let i=new t.Box3,n=new t.Vector3;class r extends t.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new t.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new t.Float32BufferAttribute([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));let n=new t.InstancedInterleavedBuffer(i,6,1);return this.setAttribute("instanceStart",new t.InterleavedBufferAttribute(n,3,0)),this.setAttribute("instanceEnd",new t.InterleavedBufferAttribute(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));let n=new t.InstancedInterleavedBuffer(i,6,1);return this.setAttribute("instanceColorStart",new t.InterleavedBufferAttribute(n,3,0)),this.setAttribute("instanceColorEnd",new t.InterleavedBufferAttribute(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new t.WireframeGeometry(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new t.Box3);let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;void 0!==e&&void 0!==n&&(this.boundingBox.setFromBufferAttribute(e),i.setFromBufferAttribute(n),this.boundingBox.union(i))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new t.Sphere),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(void 0!==e&&void 0!==i){let t=this.boundingSphere.center;this.boundingBox.getCenter(t);let r=0;for(let a=0,o=e.count;a<o;a++)n.fromBufferAttribute(e,a),r=Math.max(r,t.distanceToSquared(n)),n.fromBufferAttribute(i,a),r=Math.max(r,t.distanceToSquared(n));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}e.s(["LineSegmentsGeometry",0,r])},27530,e=>{"use strict";var t=e.i(32009);t.UniformsLib.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new t.Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},t.ShaderLib.line={uniforms:t.UniformsUtils.merge([t.UniformsLib.common,t.UniformsLib.fog,t.UniformsLib.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class i extends t.ShaderMaterial{static get type(){return"LineMaterial"}constructor(e){super({uniforms:t.UniformsUtils.clone(t.ShaderLib.line.uniforms),vertexShader:t.ShaderLib.line.vertexShader,fragmentShader:t.ShaderLib.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){!0===e!==this.dashed&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(!0===e!==this.alphaToCoverage&&(this.needsUpdate=!0),!0===e?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}e.s(["LineMaterial",0,i])},92923,e=>{"use strict";let t,i;var n=e.i(32009),r=e.i(30728),a=e.i(27530);let o=new n.Vector4,s=new n.Vector3,l=new n.Vector3,d=new n.Vector4,c=new n.Vector4,u=new n.Vector4,f=new n.Vector3,p=new n.Matrix4,h=new n.Line3,m=new n.Vector3,v=new n.Box3,y=new n.Sphere,S=new n.Vector4;function g(e,t,n){return S.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),S.multiplyScalar(1/S.w),S.x=i/n.width,S.y=i/n.height,S.applyMatrix4(e.projectionMatrixInverse),S.multiplyScalar(1/S.w),Math.abs(Math.max(S.x,S.y))}class w extends n.Mesh{constructor(e=new r.LineSegmentsGeometry,t=new a.LineMaterial({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,n=0,a=t.count;e<a;e++,n+=2)s.fromBufferAttribute(t,e),l.fromBufferAttribute(i,e),r[n]=0===n?0:r[n-1],r[n+1]=r[n]+s.distanceTo(l);let a=new n.InstancedInterleavedBuffer(r,2,1);return e.setAttribute("instanceDistanceStart",new n.InterleavedBufferAttribute(a,1,0)),e.setAttribute("instanceDistanceEnd",new n.InterleavedBufferAttribute(a,1,1)),this}raycast(e,r){let a,o,s=this.material.worldUnits,l=e.camera;null!==l||s||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let S=void 0!==e.params.Line2&&e.params.Line2.threshold||0;t=e.ray;let w=this.matrixWorld,x=this.geometry,b=this.material;if(i=b.linewidth+S,null===x.boundingSphere&&x.computeBoundingSphere(),y.copy(x.boundingSphere).applyMatrix4(w),s)a=.5*i;else{let e=Math.max(l.near,y.distanceToPoint(t.origin));a=g(l,e,b.resolution)}if(y.radius+=a,!1!==t.intersectsSphere(y)){if(null===x.boundingBox&&x.computeBoundingBox(),v.copy(x.boundingBox).applyMatrix4(w),s)o=.5*i;else{let e=Math.max(l.near,v.distanceToPoint(t.origin));o=g(l,e,b.resolution)}v.expandByScalar(o),!1!==t.intersectsBox(v)&&(s?function(e,r){let a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,l=o.attributes.instanceEnd,d=Math.min(o.instanceCount,s.count);for(let o=0;o<d;o++){h.start.fromBufferAttribute(s,o),h.end.fromBufferAttribute(l,o),h.applyMatrix4(a);let d=new n.Vector3,c=new n.Vector3;t.distanceSqToSegment(h.start,h.end,c,d),c.distanceTo(d)<.5*i&&r.push({point:c,pointOnLine:d,distance:t.origin.distanceTo(c),object:e,face:null,faceIndex:o,uv:null,uv1:null})}}(this,r):function(e,r,a){let o=r.projectionMatrix,s=e.material.resolution,l=e.matrixWorld,v=e.geometry,y=v.attributes.instanceStart,S=v.attributes.instanceEnd,g=Math.min(v.instanceCount,y.count),w=-r.near;t.at(1,u),u.w=1,u.applyMatrix4(r.matrixWorldInverse),u.applyMatrix4(o),u.multiplyScalar(1/u.w),u.x*=s.x/2,u.y*=s.y/2,u.z=0,f.copy(u),p.multiplyMatrices(r.matrixWorldInverse,l);for(let r=0;r<g;r++){if(d.fromBufferAttribute(y,r),c.fromBufferAttribute(S,r),d.w=1,c.w=1,d.applyMatrix4(p),c.applyMatrix4(p),d.z>w&&c.z>w)continue;if(d.z>w){let e=d.z-c.z,t=(d.z-w)/e;d.lerp(c,t)}else if(c.z>w){let e=c.z-d.z,t=(c.z-w)/e;c.lerp(d,t)}d.applyMatrix4(o),c.applyMatrix4(o),d.multiplyScalar(1/d.w),c.multiplyScalar(1/c.w),d.x*=s.x/2,d.y*=s.y/2,c.x*=s.x/2,c.y*=s.y/2,h.start.copy(d),h.start.z=0,h.end.copy(c),h.end.z=0;let u=h.closestPointToPointParameter(f,!0);h.at(u,m);let v=n.MathUtils.lerp(d.z,c.z,u),g=v>=-1&&v<=1,x=f.distanceTo(m)<.5*i;if(g&&x){h.start.fromBufferAttribute(y,r),h.end.fromBufferAttribute(S,r),h.start.applyMatrix4(l),h.end.applyMatrix4(l);let i=new n.Vector3,o=new n.Vector3;t.distanceSqToSegment(h.start,h.end,o,i),a.push({point:o,pointOnLine:i,distance:t.origin.distanceTo(o),object:e,face:null,faceIndex:r,uv:null,uv1:null})}}}(this,l,r))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(o),this.material.uniforms.resolution.value.set(o.z,o.w))}}e.s(["LineSegments2",0,w])}]);