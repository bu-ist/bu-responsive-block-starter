<?php
/**
 * Registers custom blocks and provides some handy starter
 * function examples in case you need them.
 * Based on the code generated for a new block plugin by WordPress.
 *
 * @package your-namespace
 *
 * @todo Is register_block_type required? We're already doing this in
 * block-starter/index.js.
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 * @throws Error Detect if npm has been executed.
 */
function your_namespace_blocks_init() {
	$script_asset_path = __DIR__ . '/build/index.asset.php';
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "your-namespace/block-starter" block first.'
		);
	}
	$index_js     = '/blocks/build/index.js';
	$script_asset = require $script_asset_path;
	wp_register_script(
		'your-namespace-blocks-editor',
		get_stylesheet_directory_uri() . $index_js,
		$script_asset['dependencies'],
		$script_asset['version'],
		false
	);
	wp_set_script_translations( 'your-namespace-blocks-editor', 'block-starter' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'your-namespace-blocks-editor',
		get_stylesheet_directory_uri() . '/blocks/' . $editor_css,
		array(),
		filemtime( __DIR__ . '/' . $editor_css )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'your-namespace-blocks',
		get_stylesheet_directory_uri() . '/blocks/' . $style_css,
		array(),
		filemtime( __DIR__ . '/' . $style_css )
	);

	register_block_type(
		'your-namespace/block-starter',
		array(
			'editor_script' => 'your-namespace-blocks-editor',
		)
	);
}
add_action( 'init', 'your_namespace_blocks_init' );

/**
 * Only loads the blocks stylesheet if blocks are actually in use.
 * This will work with new posts as well as existing posts that
 * switch to Gutenberg as the editor.
 *
 * @see https://developer.wordpress.org/reference/hooks/enqueue_block_assets/
 */
function your_namespace_enqueue_block_assets() {
	if ( has_blocks() ) {
		wp_enqueue_style( 'your-namespace-blocks' );
	}
}

add_action( 'enqueue_block_assets', 'your_namespace_enqueue_block_assets' );

/**
 * Enables support for rewriting CSS selectors on editor stylesheets.
 * This avoids CSS conflicts in the editor where WordPress editor styles
 * overwrite the frontend styles.
 *
 * @see https://developer.wordpress.org/block-editor/developers/themes/theme-support/#editor-styles
 */
function your_namespace_gutenberg_css() {
	add_theme_support( 'editor-styles' );
}

add_action( 'admin_init', 'your_namespace_gutenberg_css' );

/**
 * Enqueues the editor style, complete with rewritten selectors.
 * This is specifically only for Gutenberg blocks, so we check the screen to be sure.
 *
 * @see https://developer.wordpress.org/block-editor/developers/themes/theme-support/#enqueuing-the-editor-style
 *
 * @param object $screen The current screen.
 */
function your_namespace_add_editor_styles( $screen ) {
	if ( method_exists( $screen, 'is_block_editor' ) && $screen->is_block_editor() ) {
		add_editor_style( 'blocks/build/index.css' );
	}
}
add_action( 'current_screen', 'your_namespace_add_editor_styles', 10, 1 );

/**
 * Enqueue frontend scripts.
 */
function your_namespace_enqueue_frontend() {
	if ( has_blocks() ) {
		wp_enqueue_script( 'your-namespace-block-scripts', get_stylesheet_directory_uri() . '/blocks/build/scripts.js', array(), filemtime( __DIR__ . '/build/scripts.js' ), false );
	}
}
add_action( 'wp_enqueue_scripts', 'your_namespace_enqueue_frontend' );

/**
 * Adds a custom category to hold custom blocks to the default array.
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#register_block_style
 */
function your_namespace_block_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'your-namespace-blocks',
				'title' => __( 'Your Blocks', 'your-namespace' ),
			),
		)
	);
}
add_filter( 'block_categories', 'your_namespace_block_category', 10, 2);

/**
 * Adds a custom style to the core paragraph block.
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#register_block_style
 */
function your_namespace_register_block_styles() {
	register_block_style(
		'core/paragraph',
		array(
			'name'  => 'your-namespace-custom-style',
			'label' => __( 'Your Custom Style', 'your-namespace' ),
		)
	);
}

add_action( 'init', 'your_namespace_register_block_styles' );

/**
 * Adds support for wide and full alignments in Gutenberg.
 *
 * @see https://developer.wordpress.org/block-editor/developers/themes/theme-support/#wide-alignment
 */
add_theme_support( 'align-wide' );

/**
 * Adds color palette support to Gutenberg blocks.
 *
 * @see https://developer.wordpress.org/block-editor/developers/themes/theme-support/#block-color-palettes
 * @see src/wordpress/_settings.scss
 */
add_theme_support(
	'editor-color-palette',
	array(
		array(
			'name'  => esc_attr__( 'Your Color', 'your-namespace' ),
			'slug'  => 'your-color',
			'color' => '#000000',
		),
	)
);

/**
 * Disables the custom font size for blocks for consistency sitewide.
 *
 * @see https://developer.wordpress.org/block-editor/developers/themes/theme-support/#disabling-custom-font-sizes
 */
add_theme_support( 'disable-custom-font-sizes' );
