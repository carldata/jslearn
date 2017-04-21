module Main where

import Prelude
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE, log)
import Data.Array as A
import Data.Maybe (fromJust)
import Partial.Unsafe (unsafePartial)

import LinearAlgebra.Matrix as M
import Learn.Unsupervised.OutlierDetection as OD

main :: forall e. Eff (console :: CONSOLE | e) Unit
main = do
  log "Hello sailor!"


train :: Array Number -> OD.Model
train vs = OD.train vs'
  where vs' = unsafePartial $ fromJust $ M.fromArray (A.length vs) 1 vs


predict :: OD.Model -> Array Number -> Array Number 
predict m vs = OD.predict m vs'
  where vs' = unsafePartial $ fromJust $ M.fromArray (A.length vs) 1 vs