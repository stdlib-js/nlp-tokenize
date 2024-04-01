/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isArray = require( '@stdlib/assert-is-array' );
var fromCodePoint = require( '@stdlib/string-from-code-point' );
var pkg = require( './../package.json' ).name;
var tokenize = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var out;
	var str;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = 'To be, or not to be, that is the question' + fromCodePoint( i%126 );
		out = tokenize( str );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
