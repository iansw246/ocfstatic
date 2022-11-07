/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: operations["root__get"]
  }
  "/meetings/list": {
    get: operations["get_meetings_list_meetings_list_get"]
  }
  "/meetings/next": {
    get: operations["get_next_meeting_meetings_next_get"]
  }
  "/meetings/current": {
    get: operations["get_current_meeting_meetings_current_get"]
  }
  "/lab/hours/today": {
    get: operations["get_hours_today_lab_hours_today_get"]
  }
  "/lab/hours/{date}": {
    get: operations["get_hours_date_lab_hours__date__get"]
  }
  "/lab/num_users": {
    get: operations["get_num_users_in_lab_lab_num_users_get"]
  }
  "/lab/staff": {
    get: operations["get_staff_in_lab_lab_staff_get"]
  }
  "/lab/desktops": {
    get: operations["desktop_usage_lab_desktops_get"]
  }
  "/session/log": {
    /**
     * Primary API endpoint for session tracking.
     *
     * Desktops have a cronjob that calls this endpoint: https://git.io/vpIKX
     */
    post: operations["log_session_session_log_post"]
  }
  "/shorturls/bounce/{slug}": {
    get: operations["bounce_shorturl_shorturls_bounce__slug__get"]
  }
  "/auth/calnet": {
    get: operations["calnet_login_auth_calnet_get"]
  }
  "/auth/calnet/callback": {
    get: operations["calnet_login_callback_auth_calnet_callback_get"]
  }
  "/account/reset_password": {
    post: operations["reset_password_account_reset_password_post"]
  }
  "/account/command": {
    post: operations["run_command_account_command_post"]
  }
  "/account/me": {
    get: operations["get_account_info_account_me_get"]
  }
  "/account/quota/paper": {
    get: operations["get_paper_quota_account_quota_paper_get"]
    post: operations["add_paper_refund_account_quota_paper_post"]
  }
  "/account/hosting/vhost": {
    post: operations["request_vhost_account_hosting_vhost_post"]
  }
  "/account/hosting/mail": {
    get: operations["get_vhost_mail_account_hosting_mail_get"]
    post: operations["vhost_mail_update_account_hosting_mail_post"]
  }
  "/account/hosting/mail/export": {
    get: operations["vhost_mail_csv_export_account_hosting_mail_export_get"]
  }
  "/account/hosting/mail/import": {
    post: operations["vhost_mail_csv_import_account_hosting_mail_import_post"]
  }
  "/account/register": {
    post: operations["register_account_account_register_post"]
  }
  "/account/register/status": {
    get: operations["register_account_status_account_register_status_get"]
  }
  "/announce/blog": {
    get: operations["get_blog_posts_announce_blog_get"]
  }
  "/staff_hours": {
    get: operations["get_staff_hours_staff_hours_get"]
  }
}

export interface components {
  schemas: {
    /** AccountInfoOutput */
    AccountInfoOutput: {
      /** Username */
      username: string
      /** Email */
      email: string
      /** Name */
      name: string
      /**
       * Type
       * @enum {string}
       */
      type: "personal" | "group"
      /** Groups */
      groups: string[]
    }
    /** Body_vhost_mail_csv_import_account_hosting_mail_import_post */
    Body_vhost_mail_csv_import_account_hosting_mail_import_post: {
      data: components["schemas"]["VHostMailImportInput"]
      /**
       * Csv File
       * Format: binary
       */
      csv_file?: string
    }
    /** DesktopUsageOutput */
    DesktopUsageOutput: {
      /** All Desktops In Use */
      all_desktops_in_use: string[]
      /** All Desktops Num */
      all_desktops_num: number
      /** Public Desktops In Use */
      public_desktops_in_use: string[]
      /** Public Desktops Num */
      public_desktops_num: number
    }
    /** HTTPValidationError */
    HTTPValidationError: {
      /** Detail */
      detail?: components["schemas"]["ValidationError"][]
    }
    /** HoursOutput */
    HoursOutput: {
      /** Open */
      open?: string
      /** Close */
      close?: string
    }
    /** LogSessionInput */
    LogSessionInput: {
      state: components["schemas"]["SessionState"]
      /** User */
      user?: string
    }
    /** MailVHost */
    MailVHost: {
      /** Domain */
      domain: string
      /** Addresses */
      addresses: string[]
      /** Has Wildcard */
      has_wildcard: boolean
    }
    /** MeetingOutput */
    MeetingOutput: {
      /** Day */
      day: string
      /** Time */
      time: string
      /** Subject */
      subject: string
      /** Short */
      short: string
      /** Irl */
      irl: boolean
      /** Virtual */
      virtual: boolean
    }
    /** MeetingsListOutput */
    MeetingsListOutput: {
      /** Meetings */
      meetings: components["schemas"]["MeetingOutput"][]
    }
    /** NumUsersOutput */
    NumUsersOutput: {
      /** Num Users */
      num_users: number
    }
    /** PaperQuotaOutput */
    PaperQuotaOutput: {
      /** User */
      user: string
      /** Daily */
      daily: number
      /** Semesterly */
      semesterly: number
    }
    /** PaperRefundInput */
    PaperRefundInput: {
      /** Username */
      username: string
      /** Pages */
      pages: number
      /** Reason */
      reason: string
    }
    /** RegisterAccountError */
    RegisterAccountError: {
      /** State */
      state: string
      /** Account */
      account: string
      /** Calnet Uid */
      calnet_uid: string
    }
    /** RegisterAccountInput */
    RegisterAccountInput: {
      /**
       * Account Association
       * @description CalNet UID/CalLink OID of entity to create account for
       */
      account_association: number
      /** Username */
      username: string
      /** Password */
      password: string
      /** Contact Email */
      contact_email: string
    }
    /** RegisterAccountOutput */
    RegisterAccountOutput: {
      /** Status */
      status: string
      /** Task Id */
      task_id: string
    }
    /** RegisterAccountStatusOutput */
    RegisterAccountStatusOutput: {
      /** State */
      state: string
      /** Status */
      status?: string[]
      /** Message */
      message?: string
    }
    /** ResetPasswordInput */
    ResetPasswordInput: {
      /** Account */
      account: string
      /** New Password */
      new_password: string
    }
    /** RunCommandInput */
    RunCommandInput: {
      /** Command */
      command: string
      /** Username */
      username: string
      /** Password */
      password: string
    }
    /** RunCommandOutput */
    RunCommandOutput: {
      /** Output */
      output: string
      /** Error */
      error: string
    }
    /**
     * SessionState
     * @description An enumeration.
     * @enum {string}
     */
    SessionState: "active" | "cleanup"
    /** StaffHour */
    StaffHour: {
      /** Day */
      day: string
      /** Time */
      time: string
      /** Staff */
      staff: components["schemas"]["StaffHourStaff"][]
      /** Cancelled */
      cancelled: boolean
    }
    /** StaffHourStaff */
    StaffHourStaff: {
      /** User Name */
      user_name: string
      /** Real Name */
      real_name: string
      /** Position */
      position: string
    }
    /** StaffHoursOutput */
    StaffHoursOutput: {
      /** Staff Hours */
      staff_hours: components["schemas"]["StaffHour"][]
    }
    /** StaffInLabOutput */
    StaffInLabOutput: {
      /** Staff In Lab */
      staff_in_lab: components["schemas"]["StaffSession"][]
    }
    /** StaffSession */
    StaffSession: {
      /** User */
      user: string
      /** Host */
      host: string
      /**
       * Start
       * Format: date-time
       */
      start: string
      /**
       * End
       * Format: date-time
       */
      end?: string
    }
    /** VHostMailExportInput */
    VHostMailExportInput: {
      /** Domain */
      domain: string
    }
    /** VHostMailImportInput */
    VHostMailImportInput: {
      /** Domain */
      domain: string
    }
    /** VHostMailOutput */
    VHostMailOutput: {
      /** Vhosts */
      vhosts: components["schemas"]["MailVHost"][]
    }
    /** VHostMailUpdateInput */
    VHostMailUpdateInput: {
      /**
       * Action
       * @enum {string}
       */
      action: "add" | "update" | "delete"
      /** Addr */
      addr: string
      /** Forward To */
      forward_to?: string
      /** Password */
      password?: string
      /** New Addr */
      new_addr?: string
    }
    /** VHostRequestInput */
    VHostRequestInput: {
      /** Subdomain */
      subdomain: string
      /** Name */
      name: string
      /** Email */
      email: string
      /** Position */
      position: string
      /** Comments */
      comments?: string
    }
    /** ValidationError */
    ValidationError: {
      /** Location */
      loc: string[]
      /** Message */
      msg: string
      /** Error Type */
      type: string
    }
  }
}

export interface operations {
  root__get: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": unknown
        }
      }
    }
  }
  get_meetings_list_meetings_list_get: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["MeetingsListOutput"]
        }
      }
    }
  }
  get_next_meeting_meetings_next_get: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["MeetingOutput"]
        }
      }
    }
  }
  get_current_meeting_meetings_current_get: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["MeetingOutput"]
        }
      }
    }
  }
  get_hours_today_lab_hours_today_get: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["HoursOutput"]
        }
      }
    }
  }
  get_hours_date_lab_hours__date__get: {
    parameters: {
      path: {
        date: string
      }
    }
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["HoursOutput"]
        }
      }
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"]
        }
      }
    }
  }
  get_num_users_in_lab_lab_num_users_get: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["NumUsersOutput"]
        }
      }
    }
  }
  get_staff_in_lab_lab_staff_get: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["StaffInLabOutput"]
        }
      }
    }
  }
  desktop_usage_lab_desktops_get: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["DesktopUsageOutput"]
        }
      }
    }
  }
  /**
   * Primary API endpoint for session tracking.
   *
   * Desktops have a cronjob that calls this endpoint: https://git.io/vpIKX
   */
  log_session_session_log_post: {
    responses: {
      /** Successful Response */
      204: never
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"]
        }
      }
    }
    requestBody: {
      content: {
        "application/json": components["schemas"]["LogSessionInput"]
      }
    }
  }
  bounce_shorturl_shorturls_bounce__slug__get: {
    parameters: {
      path: {
        slug: string
      }
    }
    responses: {
      /** Successful Response */
      308: {
        content: {
          "application/json": unknown
        }
      }
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"]
        }
      }
    }
  }
  calnet_login_auth_calnet_get: {
    parameters: {
      query: {
        next?: string
      }
      header: {
        host?: string
      }
    }
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": unknown
        }
      }
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"]
        }
      }
    }
  }
  calnet_login_callback_auth_calnet_callback_get: {
    parameters: {
      query: {
        ticket: string
      }
      header: {
        host?: string
      }
      cookie: {
        calnet_redirect_url?: string
      }
    }
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": unknown
        }
      }
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"]
        }
      }
    }
  }
  reset_password_account_reset_password_post: {
    responses: {
      /** Successful Response */
      204: never
      /** Bad Request */
      400: unknown
      /** Forbidden */
      403: unknown
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"]
        }
      }
      /** Internal Server Error */
      500: unknown
    }
    requestBody: {
      content: {
        "application/json": components["schemas"]["ResetPasswordInput"]
      }
    }
  }
  run_command_account_command_post: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["RunCommandOutput"]
        }
      }
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"]
        }
      }
    }
    requestBody: {
      content: {
        "application/json": components["schemas"]["RunCommandInput"]
      }
    }
  }
  get_account_info_account_me_get: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["AccountInfoOutput"]
        }
      }
    }
  }
  get_paper_quota_account_quota_paper_get: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["PaperQuotaOutput"]
        }
      }
    }
  }
  add_paper_refund_account_quota_paper_post: {
    responses: {
      /** Successful Response */
      204: never
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"]
        }
      }
    }
    requestBody: {
      content: {
        "application/json": components["schemas"]["PaperRefundInput"]
      }
    }
  }
  request_vhost_account_hosting_vhost_post: {
    responses: {
      /** Successful Response */
      204: never
      /** Bad Request */
      400: unknown
      /** Forbidden */
      403: unknown
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"]
        }
      }
      /** Internal Server Error */
      500: unknown
    }
    requestBody: {
      content: {
        "application/json": components["schemas"]["VHostRequestInput"]
      }
    }
  }
  get_vhost_mail_account_hosting_mail_get: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["VHostMailOutput"]
        }
      }
    }
  }
  vhost_mail_update_account_hosting_mail_post: {
    responses: {
      /** Successful Response */
      204: never
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"]
        }
      }
    }
    requestBody: {
      content: {
        "application/json": components["schemas"]["VHostMailUpdateInput"]
      }
    }
  }
  vhost_mail_csv_export_account_hosting_mail_export_get: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": unknown
        }
      }
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"]
        }
      }
    }
    requestBody: {
      content: {
        "application/json": components["schemas"]["VHostMailExportInput"]
      }
    }
  }
  vhost_mail_csv_import_account_hosting_mail_import_post: {
    responses: {
      /** Successful Response */
      204: never
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"]
        }
      }
    }
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["Body_vhost_mail_csv_import_account_hosting_mail_import_post"]
      }
    }
  }
  register_account_account_register_post: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["RegisterAccountOutput"]
        }
      }
      /** Forbidden */
      403: {
        content: {
          "application/json": components["schemas"]["RegisterAccountError"]
        }
      }
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"]
        }
      }
    }
    requestBody: {
      content: {
        "application/json": components["schemas"]["RegisterAccountInput"]
      }
    }
  }
  register_account_status_account_register_status_get: {
    parameters: {
      query: {
        task_id: string
      }
    }
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["RegisterAccountStatusOutput"]
        }
      }
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"]
        }
      }
    }
  }
  get_blog_posts_announce_blog_get: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": unknown
        }
      }
    }
  }
  get_staff_hours_staff_hours_get: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["StaffHoursOutput"]
        }
      }
    }
  }
}

export interface external {}
