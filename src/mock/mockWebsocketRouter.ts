import express = require("express")

export class MockWebsocketRouter {
    public readonly router = express.Router()
  
    /**
     * Handle a websocket at this route. Note that websockets are immediately
     * paused when they come in.
     */
    public ws(route: any, ...handlers: any[]): void {
      this.router.get(
        route,
        ...handlers.map((handler) => {
          const wrapped: express.Handler = (req, res, next) => {
            ;(req as any)._ws_handled = true
            return handler(req as any, res, next)
          }
          return wrapped
        }),
      )
    }
  }