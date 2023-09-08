import ts from 'rollup-plugin-typescript2'
export default {
    input: 'index.ts',
    output: [{
      file: 'dist/index.es.js',
      format: 'es',
      globals:{
        'vue/compiler-sfc':"vue/compiler-sfc",
        'vite':'vite'
    },
    },
     {
        file: 'dist/index.umd.js',
        format: 'umd',
        name:'umd',
        globals:{
            'vue/compiler-sfc':"vue/compiler-sfc",
            'vite':'vite'
        },
    }],
    external:['vue/compiler-sfc','vite'],
    plugins:[ts()],
};