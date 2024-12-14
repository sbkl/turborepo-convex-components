/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as appPrompts_action from "../appPrompts/action.js";
import type * as appPrompts_mutation from "../appPrompts/mutation.js";
import type * as appPrompts_query from "../appPrompts/query.js";
import type * as appPrompts_schemas from "../appPrompts/schemas.js";
import type * as assessmentQuestions_aggregate from "../assessmentQuestions/aggregate.js";
import type * as assessmentQuestions_query from "../assessmentQuestions/query.js";
import type * as assessments_mutation from "../assessments/mutation.js";
import type * as assessments_query from "../assessments/query.js";
import type * as chatQuestions_action from "../chatQuestions/action.js";
import type * as chatQuestions_mutation from "../chatQuestions/mutation.js";
import type * as chatQuestions_query from "../chatQuestions/query.js";
import type * as chats_mutation from "../chats/mutation.js";
import type * as chats_query from "../chats/query.js";
import type * as customers_action from "../customers/action.js";
import type * as customers_mutation from "../customers/mutation.js";
import type * as customers_query from "../customers/query.js";
import type * as documentEmbeddings_action from "../documentEmbeddings/action.js";
import type * as documentEmbeddings_mutation from "../documentEmbeddings/mutation.js";
import type * as documentEmbeddings_query from "../documentEmbeddings/query.js";
import type * as documents_mutation from "../documents/mutation.js";
import type * as documents_query from "../documents/query.js";
import type * as documents_utils from "../documents/utils.js";
import type * as emails_action from "../emails/action.js";
import type * as env from "../env.js";
import type * as folders_mutation from "../folders/mutation.js";
import type * as folders_query from "../folders/query.js";
import type * as functions from "../functions.js";
import type * as google_action from "../google/action.js";
import type * as google_utils from "../google/utils.js";
import type * as http from "../http.js";
import type * as invoices_action from "../invoices/action.js";
import type * as invoices_mutation from "../invoices/mutation.js";
import type * as invoices_query from "../invoices/query.js";
import type * as lib_gemini from "../lib/gemini.js";
import type * as lib_googleEmbeddingService from "../lib/googleEmbeddingService.js";
import type * as lib_utils from "../lib/utils.js";
import type * as messages_action from "../messages/action.js";
import type * as messages_mutation from "../messages/mutation.js";
import type * as messages_query from "../messages/query.js";
import type * as middlewares_clerk from "../middlewares/clerk.js";
import type * as middlewares_stripe from "../middlewares/stripe.js";
import type * as paymentIntents_action from "../paymentIntents/action.js";
import type * as prices_action from "../prices/action.js";
import type * as prices_mutation from "../prices/mutation.js";
import type * as prices_query from "../prices/query.js";
import type * as products_action from "../products/action.js";
import type * as products_mutation from "../products/mutation.js";
import type * as storage_mutation from "../storage/mutation.js";
import type * as stripe_action from "../stripe/action.js";
import type * as stripe_utils from "../stripe/utils.js";
import type * as subscriptions_action from "../subscriptions/action.js";
import type * as subscriptions_mutation from "../subscriptions/mutation.js";
import type * as subscriptions_query from "../subscriptions/query.js";
import type * as summaries_action from "../summaries/action.js";
import type * as summaries_mutation from "../summaries/mutation.js";
import type * as summaries_query from "../summaries/query.js";
import type * as summarySections_mutation from "../summarySections/mutation.js";
import type * as summarySections_query from "../summarySections/query.js";
import type * as types_index from "../types/index.js";
import type * as usageEvents_mutation from "../usageEvents/mutation.js";
import type * as usageEvents_schemas from "../usageEvents/schemas.js";
import type * as users_action from "../users/action.js";
import type * as users_mutation from "../users/mutation.js";
import type * as users_query from "../users/query.js";
import type * as users_utils from "../users/utils.js";
import type * as utils from "../utils.js";
import type * as webSubscriptions_action from "../webSubscriptions/action.js";
import type * as webSubscriptions_mutation from "../webSubscriptions/mutation.js";
import type * as webSubscriptions_query from "../webSubscriptions/query.js";
import type * as webSubscriptions_utils from "../webSubscriptions/utils.js";
import type * as webhooks_clerk_emails from "../webhooks/clerk/emails.js";
import type * as webhooks_clerk_users from "../webhooks/clerk/users.js";
import type * as webhooks_stripe_customers from "../webhooks/stripe/customers.js";
import type * as webhooks_stripe_invoices from "../webhooks/stripe/invoices.js";
import type * as webhooks_stripe_prices from "../webhooks/stripe/prices.js";
import type * as webhooks_stripe_products from "../webhooks/stripe/products.js";
import type * as webhooks_stripe_subscriptionSchedule from "../webhooks/stripe/subscriptionSchedule.js";
import type * as webhooks_stripe_types from "../webhooks/stripe/types.js";
import type * as whisper_chat from "../whisper/chat.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "appPrompts/action": typeof appPrompts_action;
  "appPrompts/mutation": typeof appPrompts_mutation;
  "appPrompts/query": typeof appPrompts_query;
  "appPrompts/schemas": typeof appPrompts_schemas;
  "assessmentQuestions/aggregate": typeof assessmentQuestions_aggregate;
  "assessmentQuestions/query": typeof assessmentQuestions_query;
  "assessments/mutation": typeof assessments_mutation;
  "assessments/query": typeof assessments_query;
  "chatQuestions/action": typeof chatQuestions_action;
  "chatQuestions/mutation": typeof chatQuestions_mutation;
  "chatQuestions/query": typeof chatQuestions_query;
  "chats/mutation": typeof chats_mutation;
  "chats/query": typeof chats_query;
  "customers/action": typeof customers_action;
  "customers/mutation": typeof customers_mutation;
  "customers/query": typeof customers_query;
  "documentEmbeddings/action": typeof documentEmbeddings_action;
  "documentEmbeddings/mutation": typeof documentEmbeddings_mutation;
  "documentEmbeddings/query": typeof documentEmbeddings_query;
  "documents/mutation": typeof documents_mutation;
  "documents/query": typeof documents_query;
  "documents/utils": typeof documents_utils;
  "emails/action": typeof emails_action;
  env: typeof env;
  "folders/mutation": typeof folders_mutation;
  "folders/query": typeof folders_query;
  functions: typeof functions;
  "google/action": typeof google_action;
  "google/utils": typeof google_utils;
  http: typeof http;
  "invoices/action": typeof invoices_action;
  "invoices/mutation": typeof invoices_mutation;
  "invoices/query": typeof invoices_query;
  "lib/gemini": typeof lib_gemini;
  "lib/googleEmbeddingService": typeof lib_googleEmbeddingService;
  "lib/utils": typeof lib_utils;
  "messages/action": typeof messages_action;
  "messages/mutation": typeof messages_mutation;
  "messages/query": typeof messages_query;
  "middlewares/clerk": typeof middlewares_clerk;
  "middlewares/stripe": typeof middlewares_stripe;
  "paymentIntents/action": typeof paymentIntents_action;
  "prices/action": typeof prices_action;
  "prices/mutation": typeof prices_mutation;
  "prices/query": typeof prices_query;
  "products/action": typeof products_action;
  "products/mutation": typeof products_mutation;
  "storage/mutation": typeof storage_mutation;
  "stripe/action": typeof stripe_action;
  "stripe/utils": typeof stripe_utils;
  "subscriptions/action": typeof subscriptions_action;
  "subscriptions/mutation": typeof subscriptions_mutation;
  "subscriptions/query": typeof subscriptions_query;
  "summaries/action": typeof summaries_action;
  "summaries/mutation": typeof summaries_mutation;
  "summaries/query": typeof summaries_query;
  "summarySections/mutation": typeof summarySections_mutation;
  "summarySections/query": typeof summarySections_query;
  "types/index": typeof types_index;
  "usageEvents/mutation": typeof usageEvents_mutation;
  "usageEvents/schemas": typeof usageEvents_schemas;
  "users/action": typeof users_action;
  "users/mutation": typeof users_mutation;
  "users/query": typeof users_query;
  "users/utils": typeof users_utils;
  utils: typeof utils;
  "webSubscriptions/action": typeof webSubscriptions_action;
  "webSubscriptions/mutation": typeof webSubscriptions_mutation;
  "webSubscriptions/query": typeof webSubscriptions_query;
  "webSubscriptions/utils": typeof webSubscriptions_utils;
  "webhooks/clerk/emails": typeof webhooks_clerk_emails;
  "webhooks/clerk/users": typeof webhooks_clerk_users;
  "webhooks/stripe/customers": typeof webhooks_stripe_customers;
  "webhooks/stripe/invoices": typeof webhooks_stripe_invoices;
  "webhooks/stripe/prices": typeof webhooks_stripe_prices;
  "webhooks/stripe/products": typeof webhooks_stripe_products;
  "webhooks/stripe/subscriptionSchedule": typeof webhooks_stripe_subscriptionSchedule;
  "webhooks/stripe/types": typeof webhooks_stripe_types;
  "whisper/chat": typeof whisper_chat;
}>;
declare const fullApiWithMounts: typeof fullApi;

export declare const api: FilterApi<
  typeof fullApiWithMounts,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApiWithMounts,
  FunctionReference<any, "internal">
>;

export declare const components: {
  randomQuestionAggregator: {
    btree: {
      aggregateBetween: FunctionReference<
        "query",
        "internal",
        { k1?: any; k2?: any; namespace?: any },
        { count: number; sum: number }
      >;
      atNegativeOffset: FunctionReference<
        "query",
        "internal",
        { k1?: any; k2?: any; namespace?: any; offset: number },
        { k: any; s: number; v: any }
      >;
      atOffset: FunctionReference<
        "query",
        "internal",
        { k1?: any; k2?: any; namespace?: any; offset: number },
        { k: any; s: number; v: any }
      >;
      get: FunctionReference<
        "query",
        "internal",
        { key: any; namespace?: any },
        null | { k: any; s: number; v: any }
      >;
      offset: FunctionReference<
        "query",
        "internal",
        { k1?: any; key: any; namespace?: any },
        number
      >;
      offsetUntil: FunctionReference<
        "query",
        "internal",
        { k2?: any; key: any; namespace?: any },
        number
      >;
      paginate: FunctionReference<
        "query",
        "internal",
        {
          cursor?: string;
          k1?: any;
          k2?: any;
          limit: number;
          namespace?: any;
          order: "asc" | "desc";
        },
        {
          cursor: string;
          isDone: boolean;
          page: Array<{ k: any; s: number; v: any }>;
        }
      >;
      paginateNamespaces: FunctionReference<
        "query",
        "internal",
        { cursor?: string; limit: number },
        { cursor: string; isDone: boolean; page: Array<any> }
      >;
      validate: FunctionReference<
        "query",
        "internal",
        { namespace?: any },
        any
      >;
    };
    inspect: {
      display: FunctionReference<"query", "internal", { namespace?: any }, any>;
      dump: FunctionReference<"query", "internal", { namespace?: any }, string>;
      inspectNode: FunctionReference<
        "query",
        "internal",
        { namespace?: any; node?: string },
        null
      >;
    };
    public: {
      clear: FunctionReference<
        "mutation",
        "internal",
        { maxNodeSize?: number; namespace?: any; rootLazy?: boolean },
        null
      >;
      deleteIfExists: FunctionReference<
        "mutation",
        "internal",
        { key: any; namespace?: any },
        any
      >;
      delete_: FunctionReference<
        "mutation",
        "internal",
        { key: any; namespace?: any },
        null
      >;
      init: FunctionReference<
        "mutation",
        "internal",
        { maxNodeSize?: number; namespace?: any; rootLazy?: boolean },
        null
      >;
      insert: FunctionReference<
        "mutation",
        "internal",
        { key: any; namespace?: any; summand?: number; value: any },
        null
      >;
      makeRootLazy: FunctionReference<
        "mutation",
        "internal",
        { namespace?: any },
        null
      >;
      replace: FunctionReference<
        "mutation",
        "internal",
        {
          currentKey: any;
          namespace?: any;
          newKey: any;
          newNamespace?: any;
          summand?: number;
          value: any;
        },
        null
      >;
      replaceOrInsert: FunctionReference<
        "mutation",
        "internal",
        {
          currentKey: any;
          namespace?: any;
          newKey: any;
          newNamespace?: any;
          summand?: number;
          value: any;
        },
        any
      >;
    };
  };
};
