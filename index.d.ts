type WarmerConfig = {
  flag?: string
  concurrency?: string
  test?: string
  log?: boolean
  correlationId?: string
  delay?: number
}

/**
 * Returns a Promise that resolves to true if the current invocation is a warming
 * invocation and false otherwise.  If this is a warming invocation, the Promise will
 * wait until the delay specified by `config.delay` has passed.
 *
 * @param event the event passed to the lambda
 * @param lambda context of Lambda service
 * @param [config] the config options to change lambda warmer's default behavior.  All of
 * the settings are optional
 *
 * @returns a Promise that resolves to true if this is a warming invocation
 */
declare function warmer(
  event: any,
  lambda: any,
  config?: WarmerConfig
): Promise<boolean>

warmer.WarmerConfig = WarmerConfig

export = warmer
